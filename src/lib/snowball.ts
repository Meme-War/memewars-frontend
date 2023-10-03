import {
  Snowball,
  CHAINS,
  AuthProvider,
  SmartWalletProvider,
} from "@snowballtools/snowball-ts-sdk";

export const snowball = new Snowball(
  import.meta.env.VITE_SNOWBALL_API_KEY,
  CHAINS.goerli,
  {
    name: AuthProvider.lit,
  },
  {
    name: SmartWalletProvider.alchemy,
    apiKeys: {
      "alchemyKey-goerli": import.meta.env.VITE_ALCHEMY_GOERLI_API_KEY,
      "alchemyKey-goerli-gasPolicyId": import.meta.env
        .VITE_ALCHEMY_GOERLI_GAS_POLICY_ID,
    },
  }
);
