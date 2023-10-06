import {
  Snowball,
  CHAINS,
  AuthProvider,
  SmartWalletProvider,
  AlchemySmartWalletProviderKey,
} from "@snowballtools/snowball-ts-sdk";

export const snowball = new Snowball(
  import.meta.env.VITE_SNOWBALL_API_KEY,
  CHAINS.base_goerli,
  {
    name: AuthProvider.lit,
  },
  {
    name: SmartWalletProvider.alchemy,
    apiKeys: {
      [AlchemySmartWalletProviderKey.baseMainnet]: import.meta.env
        .VITE_ALCHEMY_BASE_API_KEY,
      [AlchemySmartWalletProviderKey.baseMainnet_gasPolicyId]: import.meta.env
        .VITE_ALCHEMY_BASE_MAINNET_GAS_POLICY_ID,
      [AlchemySmartWalletProviderKey.baseGoerli]: import.meta.env
        .VITE_ALCHEMY_BASE_GOERLI_API_KEY,
      [AlchemySmartWalletProviderKey.baseGoerli_gasPolicyId]: import.meta.env
        .VITE_ALCHEMY_BASE_GOERLI_GAS_POLICY_ID,
    },
  }
);
