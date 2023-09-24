import m from 'mithril'
import {cc} from 'mithril-cc'

import { createPublicClient, http } from 'viem'
import { baseGoerli } from 'viem/chains'
import { User, signOut } from '../lib/auth'

// 2. Set up your client with desired chain & transport.
const client = createPublicClient({
  chain: baseGoerli,
  transport: http(),
})

type Attrs = {
  user: User
}

export const MemeList = cc<Attrs>(function() {

  let blockNumber = 0n

  this.oncreate(async () => {
    blockNumber = await client.getBlockNumber()
    m.redraw()
  })

  return ({ user }) => {
    return <div class="h-screen mainbg">
      <div class="p-3 flex headerbg">
        <div>memewar.army</div>
        <div class="flex-1"></div>
        <div>
          <button
            onclick={async () => {
              await signOut()
              m.route.set('/sign-in')
            }}
          >
            {user.username}
          </button>
        </div>
      </div>
      <div>block {blockNumber}</div>
    </div>
  }
})
