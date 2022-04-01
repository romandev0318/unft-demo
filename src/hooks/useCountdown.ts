import { useEffect, useState } from "react";
import { msToTime } from "@/utils/time";

export const useCountdown = (dayXDate: string) => {
  const dayX = new Date(Date.parse(dayXDate)).getTime();
  const today = Date.now();

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

  const expired =
    remaining.days + remaining.hours + remaining.minutes + remaining.seconds <=
    0;

  return { remaining, expired };
};
