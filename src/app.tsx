import m from 'mithril'
import {cc} from 'mithril-cc'
import * as auth from './lib/auth'
import { SignInScreen } from './screens/SignInScreen'
import { SignUpScreen } from './screens/SignUpScreen'
import { globals } from './lib/globals'

const HomeScreen = cc(function() {
  return () => {
    return <div class="">Hello world!</div>
  }
})

function SignedIn(Component: any) {
  return {
    async onmatch() {
      if (auth.status.syncing) {
        await auth.syncStatusPromise
      }
      if (auth.status.name === 'signed-in') {
        return Component
      }
      else {
        globals.redirectBackTo = m.route.get()
        m.route.set('/sign-in')
      }
    }
  }
}

function SignedOut(Component: any) {
  return {
    async onmatch() {
      if (auth.status.syncing) {
        await auth.syncStatusPromise
      }
      if (auth.status.name === 'signed-out') {
        return Component
      }
      else {
        m.route.set(globals.redirectBackTo)
      }
    }
  }
}

// function Layout(Component: any) {
//   return <div class="h-full">
//     {m(Component)}
//   </div>
// }

//
// Start the app!
//
auth.checkStatus()
m.route.prefix = ''
m.route(document.getElementById('app')!, '/', {
  '/': SignedIn(HomeScreen),
  '/sign-up': SignedOut(SignUpScreen),
  '/sign-in': {
    async onmatch() {
      if (auth.status.syncing) {
        await auth.syncStatusPromise
      }
      if (auth.status.name === 'signed-in') {
        m.route.set(globals.redirectBackTo)
      }
      else {
        return SignInScreen
      }
    }
  },
})
