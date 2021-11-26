"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }



var _chunkDHEOC6CNjs = require('../chunk-DHEOC6CN.js');

// src/components/countdown/index.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);

// src/components/countdown/useCountdown.ts

var _SECOND = 1e3;
var _MINUTE = _SECOND * 60;
var _HOUR = _MINUTE * 60;
var _DAY = _HOUR * 24;
var padStart = (value) => {
  return String(value).padStart(2, "0");
};
var useCountdown = (endDate) => {
  const [days, setDays] = _react.useState.call(void 0, 99);
  const [hours, setHours] = _react.useState.call(void 0, 99);
  const [minutes, setMinutes] = _react.useState.call(void 0, 99);
  const [seconds, setSeconds] = _react.useState.call(void 0, 99);
  const [unixTimestamp, setUnixTimestamp] = _react.useState.call(void 0, 99);
  _react.useEffect.call(void 0, () => {
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
var Wrapper = _chunkDHEOC6CNjs.styled.call(void 0, "div", {
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
  var _b = _a, { endDate, onFinish } = _b, props = _chunkDHEOC6CNjs.__objRest.call(void 0, _b, ["endDate", "onFinish"]);
  const countdown = useCountdown(endDate);
  if (countdown.unixTimestamp <= 1) {
    !!onFinish && onFinish();
  }
  return /* @__PURE__ */ _react2.default.createElement(Wrapper, _chunkDHEOC6CNjs.__spreadValues.call(void 0, {
    role: "timer",
    "aria-atomic": "true"
  }, props), `${countdown.hours}:${countdown.minutes}:${countdown.seconds}`);
};


exports.Countdown = Countdown;
//# sourceMappingURL=index.js.map
