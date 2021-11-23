import { useEffect, useState } from 'react';

export const _SECOND = 1000;
export const _MINUTE = _SECOND * 60;
export const _HOUR = _MINUTE * 60;
export const _DAY = _HOUR * 24;

// add 0 before days, hours, minutes and seconds
const padStart = (value: number) => {
  return String(value).padStart(2, '0');
};

/**
 * Countdown custom hook
 *
 * @description This hook is used to manage the countdown
 */
export const useCountdown = (endDate: number) => {
  const [days, setDays] = useState(99);
  const [hours, setHours] = useState(99);
  const [minutes, setMinutes] = useState(99);
  const [seconds, setSeconds] = useState(99);
  const [unixTimestamp, setUnixTimestamp] = useState(99);

  useEffect(() => {
    const interval = setInterval(() => {
      // prevent negative values
      if (unixTimestamp <= 1) return clearInterval(interval);

      // get current date
      const now = new Date().getTime();
      // get difference between current date and end date
      const diff = endDate - now;

      const DAYS = Math.floor(diff / _DAY);
      const HOURS = Math.floor((diff % _DAY) / _HOUR);
      const MINUTES = Math.floor((diff % _HOUR) / _MINUTE);
      const SECONDS = Math.floor((diff % _MINUTE) / _SECOND);
      const UNIXTIMESTAMP = diff / 1000;

      setDays(DAYS);
      setHours(HOURS);
      setMinutes(MINUTES);
      setSeconds(SECONDS);
      setUnixTimestamp(UNIXTIMESTAMP);
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate, unixTimestamp]);

  return {
    days: padStart(days),
    hours: padStart(hours),
    minutes: padStart(minutes),
    seconds: padStart(seconds),
    daysAsNumber: days,
    hoursAsNumber: hours,
    minutesAsNumber: minutes,
    secondsAsNumber: seconds,
    unixTimestamp,
  };
};
