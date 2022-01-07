import { useEffect, useState } from 'react';

export const _SECOND = 1000;
export const _MINUTE = _SECOND * 60;
export const _HOUR = _MINUTE * 60;
export const _DAY = _HOUR * 24;

// add 0 before days, hours, minutes and seconds
const padLeft = (value?: number) => {
  return String(value || 0).padStart(2, '0');
};

/**
 * Countdown custom hook
 *
 * @description This hook is used to manage the countdown
 */
export const useCountdown = (endDate: number) => {
  const [days, setDays] = useState<number>();
  const [hours, setHours] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  const [seconds, setSeconds] = useState<number>();
  const [secondsRemaining, setSecondsRemaining] = useState(99);
  const [isTimerDone, setIsTimerDone] = useState(false);

  const shouldStopTimer = secondsRemaining <= 1;

  useEffect(() => {
    const interval = setInterval(() => {
      // stop interval
      if (shouldStopTimer) {
        setIsTimerDone(true);
        return clearInterval(interval);
      }

      // get current date
      const now = new Date().getTime();

      // get difference between current date and end date
      const diff = endDate - now;

      const DAYS = Math.floor(diff / _DAY);
      const HOURS = Math.floor((diff % _DAY) / _HOUR);
      const MINUTES = Math.floor((diff % _HOUR) / _MINUTE);
      const SECONDS = Math.floor((diff % _MINUTE) / _SECOND);
      const SECONDS_REMAINING = diff / 1000;

      setDays(DAYS < 0 ? 0 : DAYS);
      setHours(HOURS < 0 ? 0 : HOURS);
      setMinutes(MINUTES < 0 ? 0 : MINUTES);
      setSeconds(SECONDS < 0 ? 0 : SECONDS);
      setSecondsRemaining(SECONDS_REMAINING);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [endDate, shouldStopTimer]);

  return {
    days: padLeft(days),
    hours: padLeft(hours),
    minutes: padLeft(minutes),
    seconds: padLeft(seconds),
    daysAsNumber: days,
    hoursAsNumber: hours,
    minutesAsNumber: minutes,
    secondsAsNumber: seconds,
    secondsRemaining,
    isTimerDone,
  };
};
