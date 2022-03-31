import { ModalType } from "src/types";
import { SwitchNetwork } from "./SwitchNetwork";
import { ConnectionError } from "./ConnectionError";
import { ErrorModal } from "./ErrorModal";
import { SuccessModal } from "./SuccessModal";

type Props = {
  type?: ModalType;
  message?: string;
  tx?: string;
  open: boolean;
  closeModal: () => void;
};

export const ModalWrapper: React.FC<Props> = ({
  type,
  message,
  tx,
  open,
  closeModal,
}) => {
  const modalContent: { [type in ModalType]: JSX.Element } = {
    networkSwitch: <SwitchNetwork message={message} closeModal={closeModal} />,
    connectionError: <ConnectionError />,
    error: <ErrorModal message={message} closeModal={closeModal} />,
    success: <SuccessModal message={message || ""} tx={tx || ""} />,
  };

  return (
    <div
      className={`flex justify-center items-center px-6 backdrop-blur-lg bg-black/70 overflow-y-auto overflow-x-hidden fixed w-full h-full inset-0 transition ease-in-out delay-200 z-30 cursor-pointer ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      tabIndex={-1}
      aria-hidden='true'
      onClick={closeModal}
    >
      <div
        className='flex flex-col space-y-4 md:space-y-8 py-6 px-4 md:p-8 relative bg-[#0a0b0f] rounded-lg modal-border cursor-auto'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-end'>
          <div id='toggler' className='flex open' onClick={closeModal}></div>
        </div>
        {type && modalContent[type]}
      </div>
    </div>
  );
};
