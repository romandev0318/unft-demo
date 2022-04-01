import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { msToTime } from "@/utils/time";

export const useCountdown = (dayXDate: string) => {
  const dayX = new Date(Date.parse(dayXDate)).getTime();

  const [remaining, setRemaining] = useState(dayX - Date.now());
  const [expired, setExpired] = useState(remaining < 0);

  const router = useRouter();

  useEffect(() => {
    if (remaining < 0) return;

    const interval = setInterval(() => setRemaining(dayX - Date.now()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, [dayX, remaining]);

  useEffect(() => {
    if (remaining < 0) setExpired(true);
  }, [remaining, router]);

  console.log(expired);

  return { remaining: msToTime(remaining), expired };
};
