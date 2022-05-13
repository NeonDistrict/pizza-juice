import { keyframes } from '../../system';

export const Toastify__trackProgress = keyframes({
  '0%': { transform: 'scaleX(1)' },
  $full: { transform: 'scaleX(0)' },
});

export const Toastify__bounceInRight = keyframes({
  'from, 60%, 75%, 90%, to': {
    animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  },
  from: { opacity: 0, transform: 'translate3d(3000px, 0, 0)' },
  '60%': { opacity: 1, transform: 'translate3d(-25px, 0, 0)' },
  '75%': { transform: 'translate3d(10px, 0, 0)' },
  '90%': { transform: 'translate3d(-5px, 0, 0)' },
  to: { transform: 'none' },
});

export const Toastify__bounceOutRight = keyframes({
  '20%': { opacity: 1, transform: 'translate3d(-20px, 0, 0)' },
  to: { opacity: 0, transform: 'translate3d(2000px, 0, 0)' },
});

export const Toastify__bounceInLeft = keyframes({
  'from, 60%, 75%, 90%, to': {
    animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  },

  '0%': { opacity: 0, transform: 'translate3d(-3000px, 0, 0)' },
  '60%': { opacity: 1, transform: 'translate3d(25px, 0, 0)' },
  '75%': { transform: 'translate3d(-10px, 0, 0)' },
  '90%': { transform: 'translate3d(5px, 0, 0)' },
  to: { transform: 'none' },
});

export const Toastify__bounceOutLeft = keyframes({
  '20%': { opacity: 1, transform: 'translate3d(20px, 0, 0)' },
  to: { opacity: 0, transform: 'translate3d(-2000px, 0, 0)' },
});

export const Toastify__bounceInUp = keyframes({
  'from, 60%, 75%, 90%, to': {
    animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  },
  from: { opacity: 0, transform: 'translate3d(0, 3000px, 0)' },
  '60%': { opacity: 1, transform: 'translate3d(0, -20px, 0)' },
  '75%': { transform: 'translate3d(0, 10px, 0)' },
  '90%': { transform: 'translate3d(0, -5px, 0)' },
  to: { transform: 'translate3d(0, 0, 0)' },
});

export const Toastify__bounceOutUp = keyframes({
  '20%': { transform: 'translate3d(0, -10px, 0)' },
  '40%, 45%': { opacity: 1, transform: 'translate3d(0, 20px, 0)' },
  to: { opacity: 0, transform: 'translate3d(0, -2000px, 0)' },
});

export const Toastify__bounceInDown = keyframes({
  'from, 60%, 75%, 90%, to': {
    animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  },
  '0%': { opacity: 0, transform: 'translate3d(0, -3000px, 0)' },
  '60%': { opacity: 1, transform: 'translate3d(0, 25px, 0)' },
  '75%': { transform: 'translate3d(0, -10px, 0)' },
  '90%': { transform: 'translate3d(0, 5px, 0)' },
  to: { transform: 'none' },
});

export const Toastify__bounceOutDown = keyframes({
  '20%': { transform: 'translate3d(0, 10px, 0)' },
  '40%, 45%': { opacity: 1, transform: 'translate3d(0, -20px, 0)' },
  to: { opacity: 0, transform: 'translate3d(0, 2000px, 0)' },
});

export const Toastify__zoomIn = keyframes({
  from: { opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)' },
  '50%': { opacity: 1 },
});

export const Toastify__zoomOut = keyframes({
  from: { opacity: 1 },
  '50%': { opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)' },
  to: { opacity: 0 },
});

export const Toastify__flipIn = keyframes({
  from: {
    transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
    animationTimingFunction: 'ease-in',
    opacity: 0,
  },
  '40%': {
    transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
    animationTimingFunction: 'ease-in',
  },
  '60%': {
    transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)',
    opacity: 1,
  },
  '80%': { transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)' },
  to: { transform: 'perspective(400px)' },
});

export const Toastify__flipOut = keyframes({
  from: {
    transform: 'perspective(400px)',
  },
  '30%': {
    transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
    opacity: 1,
  },
  to: {
    transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
    opacity: 0,
  },
});

export const Toastify__slideInRight = keyframes({
  from: { transform: 'translate3d(110%, 0, 0)', visibility: 'visible' },
  to: { transform: 'translate3d(0, 0, 0)' },
});

export const Toastify__slideInLeft = keyframes({
  from: { transform: 'translate3d(-110%, 0, 0)', visibility: 'visible' },
  to: { transform: 'translate3d(0, 0, 0)' },
});

export const Toastify__slideInUp = keyframes({
  from: { transform: 'translate3d(0, 110%, 0)', visibility: 'visible' },
  to: { transform: 'translate3d(0, 0, 0)' },
});

export const Toastify__slideInDown = keyframes({
  from: { transform: 'translate3d(0, -110%, 0)', visibility: 'visible' },
  to: { transform: 'translate3d(0, 0, 0)' },
});

export const Toastify__slideOutRight = keyframes({
  from: { transform: 'translate3d(0, 0, 0)' },
  to: { visibility: 'hidden', transform: 'translate3d(110%, 0, 0)' },
});

export const Toastify__slideOutLeft = keyframes({
  from: { transform: 'translate3d(0, 0, 0)' },
  to: { visibility: 'hidden', transform: 'translate3d(-110%, 0, 0)' },
});

export const Toastify__slideOutDown = keyframes({
  from: { transform: 'translate3d(0, 0, 0)' },
  to: { visibility: 'hidden', transform: 'translate3d(0, 500px, 0)' },
});

export const Toastify__slideOutUp = keyframes({
  from: { transform: 'translate3d(0, 0, 0)' },
  to: { visibility: 'hidden', transform: 'translate3d(0, -500px, 0)' },
});

export const Toastify__spin = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
});
