import m from 'mithril'
import {cc} from 'mithril-cc'
import * as auth from '../lib/auth'
import { globals } from '../lib/globals'

export const SignInScreen = cc(function() {

  async function signIn() {
    await auth.signIn()
    if (auth.status.name === 'signed-in') {
      m.route.set(globals.redirectBackTo)
    }
  }

  return () => {

    const signingIn = auth.status.name === 'signing-in'

    return <div class="h-full flex-center" style="background: url('/img/main-bg.png');">
      <div class="px-4 py-6 flex-center bg-white">

        <h1 class="text-3xl font-mono">memewar.army</h1>

        <div class="mt-6 flex flex-col justify-stretch w-48">
          <button
            class="py-2 rounded-sm text-white bg-prim-700"
            onclick={() => {
              m.route.set('/sign-up')
            }}
          >
            Sign Up
          </button>
          <button
            class={`mt-6 py-2 rounded-sm border border-black ${
              signingIn ? 'animate-pulse' : ''
            }`}
            onclick={signIn}
          >
            {signingIn ? 'Signing in...' : 'Sign In'}
          </button>

        </div>
      </div>
    </div>
  }
})
