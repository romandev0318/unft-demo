export const msToTime = (ms: number | null) => {
  const time = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (!ms || ms <= 0) return time;

  time.days = Math.floor(ms / (24 * 60 * 60 * 1000));
  time.hours = Math.floor((ms % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  time.minutes = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
  time.seconds = Math.floor((ms % (60 * 1000)) / 1000);

  return time;
};
