import { Passkey } from "./passkey"
import { baseGoerli } from 'viem/chains'

type User = {
  username: string
  pkpPublicKey: string
  pkpEthAddress: string
}

export type AuthStatus =
| { name: 'init', syncing: boolean }
| { name: 'signed-in', syncing: boolean, user: User }
| { name: 'signed-out', syncing: boolean }
| { name: 'signing-in', syncing: boolean }
| { name: 'signed-up', syncing: boolean, username: string }

export let status: AuthStatus = { name: 'init', syncing: false }

export let syncStatusPromise: Promise<AuthStatus> = Promise.resolve(status)

const MOCK_DELAY = 100

const passkey = new Passkey()

export function checkStatus() {
  if (status.syncing) return syncStatusPromise

  return syncStatusPromise = (async () => {
    status.syncing = true

    status = { name: 'signed-out', syncing: false }
    // status = { name: 'signed-in', syncing: false, user: {} }
    return status
  })()
}

export function signIn() {
  if (status.syncing) return syncStatusPromise

  status = { name: 'signing-in', syncing: true }

  return syncStatusPromise = (async () => {

    const authMethod = await passkey.authenticate()
    const results = await passkey.fetchPkps(authMethod)

    if (results.length >= 2) {
      console.warn("Multiple PKPs found, using the first one")
    }

    const [{ publicKey, ethAddress }] = results
    console.log("Fetched", publicKey, ethAddress)

    const sessionSigsMap = await passkey.getSessionSigs(publicKey, authMethod, baseGoerli)

    const tx = await passkey.sendUserOperation({
      pkpPublicKey: publicKey,
      pkpEthAddress: ethAddress,
      sessionSigsMap,
      chain: baseGoerli,
    })
    console.log("tx", tx)

    const user: User = {
      // TODO: Load from kv
      username: '???',
      pkpPublicKey: publicKey,
      pkpEthAddress: ethAddress,
    }

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
