import { useEffect, useState } from "react";
import { msToTime } from "@/utils/time";

export const useCountdown = (dayXDate: string) => {
  const dayX = new Date(Date.parse(dayXDate)).getTime();

  const [remaining, setRemaining] = useState(dayX - Date.now());

  useEffect(() => {
    const interval = setInterval(
      () => setRemaining((state) => (state <= 0 ? state : state - 1000)),
      1000
    );

    return () => {
      clearInterval(interval);
    };
  }, [dayX, remaining]);

  return { remaining: msToTime(remaining), expired: remaining <= 0 };
};
