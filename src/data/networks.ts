import { utils } from "ethers";

const networks = {
  mainnet: {
    chainName: "Ethereum Mainnet",
    rpcUrls: ["https://api.mycryptoapi.com/eth", "https://rpc.ankr.com/eth"],
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    chainId: utils.hexValue(1),
  },
  rinkeby: {
    chainName: "Rinkeby",
    rpcUrls: ["https://rinkeby.arbitrum.io/rpc"],
    nativeCurrency: {
      name: "Rinkeby Ether",
      symbol: "RIN",
      decimals: 18,
    },
    chainId: utils.hexValue(4),
  },
};

export default networks;
