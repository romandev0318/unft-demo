import { WalletIcon } from "@/assets/svg";

type Props = {
  remaining: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  expired: boolean;
};

export const Timer: React.FC<Props> = ({ remaining, expired, children }) => (
  <div
    className={`flex flex-col p-5 mx-auto mt-6 md:mt-16 md:p-8 md:mx-0 space-y-6 w-auto max-w-full rounded-[19px] ${
      !expired
        ? "bg-[#020202]/30 backdrop-blur-md"
        : "bg-transparent flex-col-reverse space-y-6 space-y-reverse"
    }`}
  >
    <div
      className={`flex space-x-[9px] md:space-x-4 ${
        !expired ? "opacity-100" : "opacity-0 pointer-events-none"
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

    {children}
  </div>
);
