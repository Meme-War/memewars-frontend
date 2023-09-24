import m from 'mithril'
import {cc} from 'mithril-cc'
import * as auth from '../lib/auth'

export const SignUpScreen = cc(function() {

  let creating = false

  async function signUp() {
  }

  return () => {

    return <div class="h-full flex-center bg-mainbg">
      <div class="px-4 py-6 max-w-xs flex flex-col justify-stretch">

        <h1 class="text-2xl font-mono">Choose your name</h1>

        <p>Account names are visible to others.</p>

        <input
          type="text"
          class="mt-3 px-2 py-1 border border-prim-950"
        />

        <button
          class={`mt-2 py-2 rounded-sm bg-prim-700 text-white ${
            creating ? 'animate-pulse' : ''
          }`}
        >
          {creating ? 'Creating...' : 'Create Account'}
        </button>
      </div>
    </div>
  }
})