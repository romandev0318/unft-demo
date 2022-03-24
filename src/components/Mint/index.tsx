/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { WalletIcon } from "@/assets/svg";
import { msToTime } from "@/utils/time";

export const Mint: React.FC = () => {
  const dayX = new Date(2022, 3, 5).getTime();
  const today = Date.now();

  const [remaining, setRemaining] = useState(
    msToTime(dayX - today > 1 ? dayX - today : null)
  );

  useEffect(() => {
    if (dayX - Date.now() <= 0) return;

    const interval = setInterval(
      () =>
        setRemaining(
          msToTime(dayX - Date.now() > 1 ? dayX - Date.now() : null)
        ),
      1000
    );

    return () => {
      clearInterval(interval);
    };
  }, [dayX, remaining]);

  return (
    <div className='p-5 mx-auto mt-6 md:mt-16 md:p-8 md:mx-0 w-auto max-w-full space-y-6 backdrop-blur-md bg-[#020202]/30 rounded-[19px]'>
      <div className='flex space-x-[9px] md:space-x-4'>
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
        disabled={dayX - Date.now() > 1}
        className='btn-mint'
      >
        <WalletIcon className='mr-2 z-0' />
        <span>Mint</span>
      </button>
    </div>
  );
};
