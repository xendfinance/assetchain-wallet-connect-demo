import { assetChainTestnet } from "viem/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";


export const config = getDefaultConfig({
  appName: "Wallet Connect Demo",
  projectId: "77a78cdc46a724d6e05ce4ae785d24d7",
  chains: [assetChainTestnet],
  ssr: false, // If your dApp uses server side rendering (SSR)-true
});
