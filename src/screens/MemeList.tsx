import m from 'mithril'
import {cc} from 'mithril-cc'

import { createPublicClient, http } from 'viem'
import { baseGoerli } from 'viem/chains'

// 2. Set up your client with desired chain & transport.
const client = createPublicClient({
  chain: baseGoerli,
  transport: http(),
})

export const MemeList = cc(function() {

  let blockNumber = 0n

  this.oncreate(async () => {
    blockNumber = await client.getBlockNumber()
    m.redraw()
  })

  return () => {
    return <div class="h-screen bg-mainbg">
      <div class=""></div>
      <div>block {blockNumber}</div>
    </div>
  }
})
