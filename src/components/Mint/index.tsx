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
    <div>
      <div>
        <div>
          <span>{remaining.days}</span>
          <span>Days</span>
        </div>
        <div>
          <span>{remaining.hours}</span>
          <span>Hours</span>
        </div>
        <div>
          <span>{remaining.minutes}</span>
          <span>Minutes</span>
        </div>
        <div>
          <span>{remaining.seconds}</span>
          <span>Seconds</span>
        </div>
      </div>

      <button
        type='button'
        disabled={dayX - Date.now() > 1}
        className='text-[#F2CF37] hover:text-black hover:fill-black fill-[#F2CF37]'
      >
        <WalletIcon /> Mint
      </button>
    </div>
  );
};
