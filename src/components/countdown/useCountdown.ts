import { useEffect, useState } from 'react';

export const SECOND = 1000;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;

// add 0 before days, hours, minutes and seconds
const padStart = (value: number) => {
  return String(value).padStart(2, '0');
};

/**
 * Countdown custom hook
 *
 * @description This hook is used to manage the countdown
 */
export const useCountdown = (endDate: Date) => {
  const [days, setDays] = useState(99);
  const [hours, setHours] = useState(99);
  const [minutes, setMinutes] = useState(99);
  const [seconds, setSeconds] = useState(99);

  useEffect(() => {
    const interval = setInterval(() => {
      if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
        return clearInterval(interval);
      }

      // get current date
      const now = new Date().getTime();
      // get difference between current date and end date
      const diff = endDate.getTime() - now;

      const daysA = Math.floor(diff / DAY);
      const hoursA = Math.floor((diff % DAY) / HOUR);
      const minutesA = Math.floor((diff % HOUR) / MINUTE);
      const secondsA = Math.floor((diff % MINUTE) / SECOND);

      setDays(daysA);
      setHours(hoursA);
      setMinutes(minutesA);
      setSeconds(secondsA);
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate, days, hours, minutes, seconds]);

  return {
    days: padStart(days),
    hours: padStart(hours),
    minutes: padStart(minutes),
    seconds: padStart(seconds),
    daysAsNumber: days,
    hoursAsNumber: hours,
    minutesAsNumber: minutes,
    secondsAsNumber: seconds,
  };
};
