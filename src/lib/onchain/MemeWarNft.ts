export const NFTContractAbi = {
  abi: [
    {
      inputs: [{ internalType: "address", name: "_beacon", type: "address" }],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousFeeReceiver",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newFeeReceiver",
          type: "address",
        },
      ],
      name: "FeeReceiverChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "previousPrice",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "previousFee",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newPrice",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newFee",
          type: "uint256",
        },
      ],
      name: "PriceFeeChanged",
      type: "event",
    },
    {
      inputs: [
        { internalType: "address", name: "newFeeReceiver", type: "address" },
      ],
      name: "changeFeeReceiver",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "string", name: "", type: "string" },
      ],
      name: "collections",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "fee",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "feeReceiver",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getBeacon",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            { internalType: "address", name: "artist", type: "address" },
            { internalType: "string", name: "collectionName", type: "string" },
            { internalType: "uint256", name: "tokenID", type: "uint256" },
            { internalType: "string", name: "uri", type: "string" },
            { internalType: "uint256", name: "startTime", type: "uint256" },
          ],
          internalType: "struct NewNFT",
          name: "tokenData",
          type: "tuple",
        },
      ],
      name: "getCreatedAddress",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getImplementation",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getPaymentVars",
      outputs: [
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "address", name: "", type: "address" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            { internalType: "address", name: "artist", type: "address" },
            { internalType: "string", name: "collectionName", type: "string" },
            { internalType: "uint256", name: "tokenID", type: "uint256" },
            { internalType: "string", name: "uri", type: "string" },
            { internalType: "uint256", name: "startTime", type: "uint256" },
          ],
          internalType: "struct NewNFT",
          name: "tokenData",
          type: "tuple",
        },
        { internalType: "bytes", name: "signature", type: "bytes" },
        { internalType: "uint256", name: "numberToMint", type: "uint256" },
      ],
      name: "handleMint",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            { internalType: "address", name: "artist", type: "address" },
            { internalType: "string", name: "collectionName", type: "string" },
            { internalType: "uint256", name: "tokenID", type: "uint256" },
            { internalType: "string", name: "uri", type: "string" },
            { internalType: "uint256", name: "startTime", type: "uint256" },
          ],
          internalType: "struct NewNFT",
          name: "tokenData",
          type: "tuple",
        },
        { internalType: "bytes", name: "signature", type: "bytes" },
        { internalType: "uint256", name: "numberToMint", type: "uint256" },
      ],
      name: "mintNewArtistCollection",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "price",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "newPrice", type: "uint256" },
        { internalType: "uint256", name: "newFee", type: "uint256" },
      ],
      name: "setPriceAndFee",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
};
