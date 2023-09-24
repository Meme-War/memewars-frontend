export type AuthStatus =
| { name: 'init', syncing: boolean }
| { name: 'signed-in', syncing: boolean }
| { name: 'signed-out', syncing: boolean }
| { name: 'signing-in', syncing: boolean }

export let status: AuthStatus = { name: 'init', syncing: false }

export let syncStatusPromise: Promise<AuthStatus> = Promise.resolve(status)

const MOCK_DELAY = 100

export function checkStatus() {
  if (status.syncing) return syncStatusPromise

  return syncStatusPromise = (async () => {
    status.syncing = true
    await new Promise(resolve => setTimeout(resolve, MOCK_DELAY))
    status = { name: 'signed-out', syncing: false }
    // status = { name: 'signed-in', syncing: false }
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
