import m from "mithril";
import { cc } from "mithril-cc";

import { createPublicClient, http } from "viem";
import { baseGoerli } from "viem/chains";
import { UserHeader } from "./common/UserHeader";
import { User } from "../lib/auth";
import { TabBar } from "../components/TabBar";

// 2. Set up your client with desired chain & transport.
const client = createPublicClient({
  chain: baseGoerli,
  transport: http(),
});

const TWELVE_HOURS = 1000 * 60 * 60 * 12;

type RankingItem = {
  imageUrl: string;
  mintCount: number;
  creatorName: string;
  startedAt: number;
  price: bigint;
};

type Attrs = {
  user: User;
};
export const MemeList = cc<Attrs>(function () {
  let blockNumber = 0n;

  this.oncreate(async () => {
    blockNumber = await client.getBlockNumber();
    m.redraw();
  });

  let collections: RankingItem[] = [
    {
      imageUrl: "http://placekitten.com/300/300",
      mintCount: 43,
      creatorName: "jimmy",
      startedAt: Date.now() - 1000 * 60 * 60 * 7,
      price: 10n ** 15n,
    },
    {
      imageUrl: "http://placekitten.com/300/300",
      mintCount: 33,
      creatorName: "kam",
      startedAt: Date.now() - 1000 * 60 * 60 * 3,
      price: 10n ** 15n,
    },
  ];

  return ({ user }) => {
    return (
      <div class="h-screen mainbg flex flex-col">
        {m(UserHeader, { user })}

        <div class="w-full flex-1 max-w-md mx-auto">
          <div>
            <h1 class="text-xl font-bold">Most popular</h1>
            <div class="p-4 space-y-2">
              {collections.map((item) => {
                return m(RankingCell, { user, item });
              })}
            </div>
          </div>
        </div>
        <div class="w-full max-w-md self-center">{m(TabBar)}</div>
      </div>
    );
  };
});

type RankingCellAttrs = {
  user: User;
  item: RankingItem;
};

type X = RankingCellAttrs | string;

const RankingCell = cc<RankingCellAttrs>(function () {
  let buyCount = 1;

  return ({ item }) => {
    const isEnded = item.startedAt + TWELVE_HOURS < Date.now();

    return (
      <div class="flex items-center space-x-2">
        <img class="w-20 h-20" src={item.imageUrl} />

        <div class="flex-1 space-y-1">
          <div class="flex items-center">
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
              <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
              <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
            </svg>

            <span class="ml-2">{item.mintCount}</span>
          </div>

          <div class="flex items-center">
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>
            <span class="ml-2">{item.creatorName}</span>
          </div>

          <div class="flex items-center">
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span class="ml-2">
              {timeRemaining(item.startedAt, TWELVE_HOURS)} ETH
            </span>
          </div>
        </div>

        <div>
          {isEnded ? (
            <a href="#">OpenSea</a>
          ) : (
            <div>
              <div class="flex">
                <button class="w-20 py-1 rounded bg-prim-700 text-white">
                  Buy {buyCount}
                </button>
                <div class="ml-[1px] flex flex-col">
                  <button
                    class="rounded-t bg-prim-700 text-xs text-white"
                    onclick={() => {
                      buyCount++;
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <button
                    class="rounded-b bg-prim-700 text-xs text-white"
                    onclick={() => {
                      buyCount = Math.max(1, buyCount - 1);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <p class="mt-1 text-center text-xs text-gray-500">
                0.001 eth ($1.60)
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };
});

function timeRemaining(from: number, timeLimit: number) {
  const elapsed = Date.now() - from;
  const remaining = timeLimit - elapsed;
  if (remaining < 0) {
    return "Ended";
  }
  const seconds = Math.floor(remaining / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  if (days > 0) {
    return `${days}d`;
  }
  if (hours > 0) {
    return `${hours}h`;
  }
  if (minutes > 0) {
    return `${minutes}m`;
  }
  return `${seconds}s`;
}
