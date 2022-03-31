import { useEffect, useState } from "react";
import { WalletIcon } from "@/assets/svg";
import { msToTime } from "@/utils/time";

type Props = {
  loading: boolean;
  onClick: () => void;
};

export const MintBtn: React.FC<Props> = ({ loading, onClick }) => {
  const dayX = new Date(Date.parse(process.env.DAY_X || "")).getTime();
  const today = new Date().getTime();

  const [remaining, setRemaining] = useState(
    msToTime(dayX - today > 1 ? dayX - today : null)
  );

  useEffect(() => {
    if (dayX - today <= 0) return;

    const interval = setInterval(
      () => setRemaining(msToTime(dayX - today > 1 ? dayX - today : null)),
      1000
    );

    return () => {
      clearInterval(interval);
    };
  }, [dayX, today, remaining]);

  return (
    <div
      className={`flex flex-col p-5 mx-auto mt-6 md:mt-16 md:p-8 md:mx-0 space-y-6 w-auto max-w-full rounded-[19px] ${
        dayX - today > 1
          ? "bg-[#020202]/30 backdrop-blur-md"
          : "bg-transparent flex-col-reverse space-y-6 space-y-reverse"
      }`}
    >
      <div
        className={`flex space-x-[9px] md:space-x-4 ${
          dayX - today > 1 ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className='flex flex-col rounded-xl w-24 pt-[6px] pb-[10px] md:pt-4 md:pb-4 bg-[#020202]/40 border border-[#9D9B95]'>
          <span className='text-[22px] md:text-2xl font-semibold -mb-1 text-[#F2F2F2]'>
            {remaining.days}
          </span>
          <span className='text-[12px] md:text-sm font-bold text-[#BCBCBC] tracking-tighter'>
            Days
          </span>
        </div>
        <div className='flex flex-col rounded-xl w-24 pt-[6px] pb-[10px] md:pt-4 md:pb-4 bg-[#020202]/40 border border-[#9D9B95]'>
          <span className='text-[22px] md:text-2xl font-semibold -mb-1 text-[#F2F2F2]'>
            {remaining.hours}
          </span>
          <span className='text-[12px] md:text-sm font-bold text-[#BCBCBC] tracking-tighter'>
            Hours
          </span>
        </div>
        <div className='flex flex-col rounded-xl w-24 pt-[6px] pb-[10px] md:pt-4 md:pb-4 bg-[#020202]/40 border border-[#9D9B95]'>
          <span className='text-[22px] md:text-2xl font-semibold -mb-1 text-[#F2F2F2]'>
            {remaining.minutes}
          </span>
          <span className='text-[12px] md:text-sm font-bold text-[#BCBCBC] tracking-tighter'>
            Minutes
          </span>
        </div>
        <div className='flex flex-col rounded-xl w-24 pt-[6px] pb-[10px] md:pt-4 md:pb-4 bg-[#020202]/40 border border-[#9D9B95]'>
          <span className='text-[22px] md:text-2xl font-semibold -mb-1 text-[#F2F2F2]'>
            {remaining.seconds}
          </span>
          <span className='text-[12px] md:text-sm font-bold text-[#BCBCBC] tracking-tighter'>
            Seconds
          </span>
        </div>
      </div>

      <button
        type='button'
        disabled={
          (remaining.days === 0 &&
            remaining.hours === 0 &&
            remaining.minutes === 0 &&
            remaining.seconds === 0) ||
          loading
        }
        className='btn-mint'
        onClick={onClick}
      >
        <WalletIcon className={`mr-2 z-0 ${loading ? "hidden" : "block"}`} />
        <span>{loading ? "Processing..." : "Mint"}</span>
      </button>
    </div>
  );
};
