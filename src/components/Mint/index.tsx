import { useState } from "react";
import { ethers } from "ethers";
import { ModalWrapper } from "../Modal";
import { MintBtn } from "../MintBtn";
import getContract from "src/contract";
import networks from "@/data/networks";
import { useModal } from "@/hooks/useModal";
import { ModalType } from "src/types";

export const Mint: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { modal, open, openModal, closeModal } = useModal<{
    type: ModalType;
    message?: string;
    tx?: string;
  }>();

  const mint = async () => {
    setLoading(true);

    try {
      const { ethereum } = window;

      if (!ethereum) throw { type: "connectionError" };

      const chainId = await ethereum.request({ method: "eth_chainId" });

      if (
        chainId !==
        networks[process.env.NETWORK as keyof typeof networks].chainId
      )
        throw {
          type: "networkSwitch",
          message: `Please change your network to ${
            networks[process.env.NETWORK as keyof typeof networks].chainName
          }.`,
        };

      const provider = new ethers.providers.Web3Provider(
        ethereum as any,
        "any"
      );

      await provider.send("eth_requestAccounts", []);

      const signer = provider.getSigner();

      const contract = getContract(signer);

      const cost = await contract.cost();

      console.log("Cost: ", cost);

      const tx = await contract.mint(1, {
        gasLimit: +(process.env.GAS_LIMIT || "285000"),
        value: cost.mul(1),
      });

      await tx.wait();

      setLoading(false);
      openModal({
        type: "success",
        message: "Mint successfull!",
        tx: `https://${
          process.env.NETWORK === "rinkeby" ? "rinkeby." : ""
        }etherscan.io/tx/${tx.hash}`,
      });
    } catch (error: any) {
      console.error("Error minting", error);
      setLoading(false);
      openModal(
        error.type
          ? { ...error }
          : {
              type: "error",
              message: "Sorry, something went wrong. Try again later",
            }
      );
    }
  };

  return (
    <>
      <ModalWrapper {...modal} open={open} closeModal={closeModal} />
      <MintBtn loading={loading} onClick={mint} />
    </>
  );
};
