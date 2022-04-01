import { useEffect, useState } from "react";
import { msToTime } from "@/utils/time";

export const useCountdown = (dayXDate: string) => {
  const dayX = new Date(Date.parse(dayXDate)).getTime();

  const [remaining, setRemaining] = useState(dayX - Date.now());

  useEffect(() => {
    if (remaining < 0) return;

    const interval = setInterval(() => setRemaining(dayX - Date.now()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, [dayX, remaining]);

  return { remaining: msToTime(remaining), expired: remaining < 0 };
};
