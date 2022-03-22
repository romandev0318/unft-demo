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
    <div className='p-8 mt-16 space-y-6 backdrop-blur-md bg-[#020202]/30 rounded-[19px]'>
      <div className='flex space-x-4'>
        <div className='flex flex-col rounded-xl w-24 py-4 bg-[#020202]/40 border border-[#9D9B95]'>
          <span className='text-2xl font-semibold text-[#F2F2F2]'>
            {remaining.days}
          </span>
          <span className='text-sm font-bold text-[#BCBCBC]'>Days</span>
        </div>
        <div className='flex flex-col rounded-xl w-24 py-4 bg-[#020202]/40 border border-[#9D9B95]'>
          <span className='text-2xl font-semibold text-[#F2F2F2]'>
            {remaining.hours}
          </span>
          <span className='text-sm font-bold text-[#BCBCBC]'>Hours</span>
        </div>
        <div className='flex flex-col rounded-xl w-24 py-4 bg-[#020202]/40 border border-[#9D9B95]'>
          <span className='text-2xl font-semibold text-[#F2F2F2]'>
            {remaining.minutes}
          </span>
          <span className='text-sm font-bold text-[#BCBCBC]'>Minutes</span>
        </div>
        <div className='flex flex-col rounded-xl w-24 py-4 bg-[#020202]/40 border border-[#9D9B95]'>
          <span className='text-2xl font-semibold text-[#F2F2F2]'>
            {remaining.seconds}
          </span>
          <span className='text-sm font-bold text-[#BCBCBC]'>Seconds</span>
        </div>
      </div>

      <button
        type='button'
        disabled={dayX - Date.now() > 1}
        className='btn-mint'
      >
        <WalletIcon className='mr-2 z-10' />
        <span className='z-10'>Mint</span>
      </button>
    </div>
  );
};
