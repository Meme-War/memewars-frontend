import { Passkey } from "./passkey"

type User = {}

export type AuthStatus =
| { name: 'init', syncing: boolean }
| { name: 'signed-in', syncing: boolean, user: User }
| { name: 'signed-out', syncing: boolean }
| { name: 'signing-in', syncing: boolean }

export let status: AuthStatus = { name: 'init', syncing: false }

export let syncStatusPromise: Promise<AuthStatus> = Promise.resolve(status)

const MOCK_DELAY = 100

const passkey = new Passkey()

export function checkStatus() {
  if (status.syncing) return syncStatusPromise

  return syncStatusPromise = (async () => {
    status.syncing = true

    // TODO: CHECK AUTH STATUS

    // status = { name: 'signed-out', syncing: false }
    status = { name: 'signed-in', syncing: false, user: {} }
    return status
  })()
}

export function signIn() {
  if (status.syncing) return syncStatusPromise

  status = { name: 'signing-in', syncing: true }

  return syncStatusPromise = (async () => {
    await new Promise(resolve => setTimeout(resolve, MOCK_DELAY))
    status = { name: 'signed-in', syncing: false }
    return status
  })()
}
