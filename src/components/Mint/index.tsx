import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { ModalWrapper } from "../Modal";
import { Timer } from "../Timer";
import getContract from "src/contract";
import networks from "@/data/networks";
import { useModal } from "@/hooks/useModal";
import { useCountdown } from "@/hooks/useCountdown";
import { ModalType } from "src/types";
import { WalletIcon } from "@/assets/svg";

export const Mint: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { modal, open, openModal, closeModal } = useModal<{
    type: ModalType;
    message?: string;
    tx?: string;
  }>();
  const { remaining } = useCountdown(process.env.DAY_X || "April 1 2022");

  const [expired, setExpired] = useState(false);

  useEffect(() => {
    setExpired(
      new Date(Date.parse(process.env.DAY_X || "")).getTime() - Date.now() <= 0
    );
  }, [remaining]);

  console.log(expired);

  const mint = async () => {
    if (!expired || loading) return;

    setLoading(true);

    try {
      const { ethereum } = window;

      if (!ethereum) throw { type: "connectionError" };

      const provider = new ethers.providers.Web3Provider(
        ethereum as any,
        "any"
      );

      await provider.send("eth_requestAccounts", []);

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
      <span className='sr-only'>{expired.toString()}</span>
      <Timer remaining={remaining} expired={expired}>
        <button
          type='button'
          className={!expired || loading ? "btn-mint disabled" : "btn-mint"}
          onClick={mint}
        >
          <WalletIcon className={`mr-2 z-0 ${loading ? "hidden" : "block"}`} />
          <span>{loading ? "Processing..." : "Mint"}</span>
        </button>
      </Timer>
    </>
  );
};
