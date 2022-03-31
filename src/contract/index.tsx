import { ethers } from "ethers";
import ABI from "./abi.json";

const getContract = (provider: ethers.providers.JsonRpcSigner) => {
  const address = process.env.CONTRACT_ADDRESS || "";

  return new ethers.Contract(address, ABI, provider);
};

export default getContract;
