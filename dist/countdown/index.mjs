import {
  __objRest,
  __spreadValues,
  styled
} from "../chunk-KKM2LXRG.mjs";

// src/components/countdown/index.tsx
import React from "react";

// src/components/countdown/useCountdown.ts
import { useEffect, useState } from "react";
var _SECOND = 1e3;
var _MINUTE = _SECOND * 60;
var _HOUR = _MINUTE * 60;
var _DAY = _HOUR * 24;
var padStart = (value) => {
  return String(value).padStart(2, "0");
};
var useCountdown = (endDate) => {
  const [days, setDays] = useState(99);
  const [hours, setHours] = useState(99);
  const [minutes, setMinutes] = useState(99);
  const [seconds, setSeconds] = useState(99);
  const [unixTimestamp, setUnixTimestamp] = useState(99);
  useEffect(() => {
    const interval = setInterval(() => {
      if (unixTimestamp <= 1)
        return clearInterval(interval);
      const now = new Date().getTime();
      const diff = endDate - now;
      const DAYS = Math.floor(diff / _DAY);
      const HOURS = Math.floor(diff % _DAY / _HOUR);
      const MINUTES = Math.floor(diff % _HOUR / _MINUTE);
      const SECONDS = Math.floor(diff % _MINUTE / _SECOND);
      const UNIXTIMESTAMP = diff / 1e3;
      setDays(DAYS);
      setHours(HOURS);
      setMinutes(MINUTES);
      setSeconds(SECONDS);
      setUnixTimestamp(UNIXTIMESTAMP);
    }, 1e3);
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
    unixTimestamp
  };
};

// src/components/countdown/styles.ts
var Wrapper = styled("div", {
  d: "inline-block",
  color: "$pink-500",
  fontWeight: 400,
  fontFamily: '"Syne Mono", serif',
  borderTop: "1px solid $grey-600",
  borderBottom: "1px solid $grey-600",
  textShadow: "0px 0px 4px rgba(245, 113, 171, 0.52)",
  variants: {
    size: {
      sm: {
        fontSize: "20px"
      },
      md: {
        fontSize: "50px",
        py: "$1"
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
});

// src/components/countdown/index.tsx
var Countdown = (_a) => {
  var _b = _a, { endDate, onFinish } = _b, props = __objRest(_b, ["endDate", "onFinish"]);
  const countdown = useCountdown(endDate);
  if (countdown.unixTimestamp <= 1) {
    !!onFinish && onFinish();
  }
  return /* @__PURE__ */ React.createElement(Wrapper, __spreadValues({
    role: "timer",
    "aria-atomic": "true"
  }, props), `${countdown.hours}:${countdown.minutes}:${countdown.seconds}`);
};
export {
  Countdown
};
//# sourceMappingURL=index.mjs.map
