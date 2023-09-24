import { Passkey, SessionSigsMap } from "./passkey"
import { baseGoerli } from 'viem/chains'

export type User = {
  username: string
  pkpPublicKey: string
  pkpEthAddress: string
  sessionSigsMap: SessionSigsMap
  sessionExpiresAt: number
}

export type AuthStatus =
| { name: 'init', syncing: boolean }
| { name: 'signed-in', syncing: boolean, user: User }
| { name: 'signed-out', syncing: boolean }
| { name: 'signing-in', syncing: boolean }
| { name: 'signed-up', syncing: boolean, username: string }

export let status: AuthStatus = { name: 'init', syncing: false }

export let syncStatusPromise: Promise<AuthStatus> = Promise.resolve(status)

const passkey = new Passkey()

export function checkStatus() {
  if (status.syncing) return syncStatusPromise

  let user: User | null = null
  try {
    user = JSON.parse(localStorage.getItem('user') as any)
    if (!user?.sessionExpiresAt || Date.now() > user.sessionExpiresAt) {
      user = null
    }
  }
  catch {
    // ignore
  }

  return syncStatusPromise = (async () => {
    status.syncing = true

    status = user
      ? { name: 'signed-in', syncing: false, user }
      : { name: 'signed-out', syncing: false }

    return status
  })()
}

export function signIn() {
  if (status.syncing) return syncStatusPromise

  // TODO: Load from kv
  const username = status.name === 'signed-up' ? status.username : '<unknown>'

  status = { name: 'signing-in', syncing: true }

  return syncStatusPromise = (async () => {

    const authMethod = await passkey.authenticate()
    const results = await passkey.fetchPkps(authMethod)

    if (results.length >= 2) {
      console.warn("Multiple PKPs found, using the first one")
    }

    const [{ publicKey, ethAddress }] = results
    console.log("Fetched", publicKey, ethAddress)

    const {sessionExpiresAt, sessionSigsMap} = await passkey.getSessionSigs(publicKey, authMethod, baseGoerli)
    console.log("sessionSigsMap", sessionSigsMap)

    const user: User = {
      username,
      pkpPublicKey: publicKey,
      pkpEthAddress: ethAddress,
      sessionSigsMap,
      sessionExpiresAt,
    }

    localStorage.setItem('user', JSON.stringify(user))

    status = { name: 'signed-in', syncing: false, user }
    return status
  })()
}

export function signUp(username: string) {
  if (status.syncing) return syncStatusPromise

  status = { name: 'signing-in', syncing: true }

  return syncStatusPromise = (async () => {

    const response = await passkey.register(username)

    console.log("signup response", response)

    // TODO: Save in kv

    status = { name: 'signed-up', syncing: false, username }
    return status
  })()
}

export function signOut() {
  if (status.syncing) return syncStatusPromise

  status = { name: 'signed-out', syncing: false }

  localStorage.removeItem('user')
}
