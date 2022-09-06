import { styled } from '../../system';

import { ToastContainer } from 'react-toastify';

import {
  Toastify__bounceInDown,
  Toastify__bounceInLeft,
  Toastify__bounceInRight,
  Toastify__bounceInUp,
  Toastify__bounceOutDown,
  Toastify__bounceOutLeft,
  Toastify__bounceOutRight,
  Toastify__bounceOutUp,
  Toastify__flipIn,
  Toastify__flipOut,
  Toastify__slideInDown,
  Toastify__slideInLeft,
  Toastify__slideInRight,
  Toastify__slideInUp,
  Toastify__slideOutDown,
  Toastify__slideOutLeft,
  Toastify__slideOutRight,
  Toastify__slideOutUp,
  Toastify__spin,
  Toastify__trackProgress,
  Toastify__zoomIn,
  Toastify__zoomOut,
} from './animations';

export const typeVariant = {
  type: {
    default: {
      color: '$white',
    },
    warning: {
      color: '$yellow-500',
    },
    error: {
      color: '$red-500',
    },
    success: {
      color: '$green-500',
    },
    primary: {
      color: '$pink-500',
    },
  },
};

export const Wrapper = styled('div', {
  d: 'flex',
  w: '$full',
  h: '$full',
  bg: '$grey-800',
  border: '1px solid $grey-700',

  // boxShadow: '$elevation-200'
  boxShadow:
    '0px 0.5px 2px rgba(0, 0, 0, 0.16), 0px 4px 4px -2px rgba(0, 0, 0, 0.12)',
  variants: {
    type: {
      default: {},
      warning: {
        borderLeft: '1px solid $yellow-500',
      },
      error: {
        borderLeft: '1px solid $red-500',
      },
      success: {
        borderLeft: '1px solid $green-500',
      },
      primary: {
        borderLeft: '1px solid $pink-500',
      },
    },
  },
});

export const Title = styled('h1', {
  fontFamily: '$system',
  fontWeight: '$medium',
  fontSize: '16px',
  lineHeight: '20px',
  textTransform: 'none',

  variants: { ...typeVariant },
});

export const ButtonWrapper = styled('div', {
  d: 'flex',
  gap: '$2',

  variants: {
    stacked: {
      true: {},
      false: {
        py: '$4',
        pr: '$4',
      },
    },
  },
});

export const ColorWrapper = styled('div', {
  d: 'flex',
  variants: { ...typeVariant },
});

export const IconWrapper = styled(ColorWrapper, {
  p: '$4',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 26,
});

export const Container = styled(ToastContainer, {
  zIndex: '$toast',
  transform: 'translate3d(0, 0, 9999px)',
  position: 'fixed',
  color: '$white',

  '&.Toastify__toast-container--top-left': {
    top: '$4',
    left: '$4',
  },

  '&.Toastify__toast-container--top-center': {
    top: '$4',
    left: '50%',
    transform: 'translateX(-50%)',
  },

  '&.Toastify__toast-container--top-right': {
    top: '$4',
    right: '$4',
  },

  '&.Toastify__toast-container--bottom-left': {
    bottom: '$4',
    left: '$4',
  },

  '&.Toastify__toast-container--bottom-center': {
    bottom: '$4',
    left: '50%',
    transform: 'translateX(-50%)',
  },

  '&.Toastify__toast-container--bottom-right': {
    bottom: '$4',
    right: '$4',
  },

  '.Toastify__toast': {
    position: 'relative',
    maxH: 800,
    mb: '$4',
    d: 'flex',
    justify: 'space-between',
    overflow: 'hidden',
    fontFamily: '$system',
    cursor: 'pointer',
    direction: 'ltr',
  },

  '.Toastify__toast-body': {
    d: 'flex',
    align: 'center',
    flex: '1 1 auto',
    margin: 'auto 0',
  },

  '.Toastify__toast-body > div:last-child': {
    flex: 1,
  },

  '.Toastify__toast-icon': {
    d: 'flex',
    w: '20px',
    flexShrink: 0,
    marginEnd: '$2',
    marginInlineEnd: '$2',

    '> svg': {
      fill: 'currentColor',
    },
  },

  '.Toastify--animate': {
    animationFillMode: 'both',
    animationDuration: '0.7s',
  },

  '.Toastify--animate-icon': {
    animationFillMode: 'both',
    animationDuration: '0.3s',
  },

  '.Toastify__close-button': {
    color: '$white',
    bg: 'transparent',
    outline: 'none',
    border: 'none',
    p: 0,
    cursor: 'pointer',
    opacity: 0.7,
    transition: '0.3s ease',
    alignSelf: 'flex-start',

    '&:hover, &:focus': {
      opacity: 1,
    },

    '> svg': {
      fill: 'currentColor',
      height: '16px',
      width: '14px',
    },
  },

  '.Toastify__progress-bar': {
    position: 'absolute',
    bottom: '0',
    left: '0',
    w: '$full',
    height: '5px',
    zIndex: '$toast',
    opacity: 0.7,
    transformOrigin: 'left',
  },

  '.Toastify__progress-bar--animated': {
    animation: `${Toastify__trackProgress} linear 1 forwards`,
  },

  '.Toastify__progress-bar--controlled': {
    transition: 'transform 0.2s',
  },

  '.Toastify__spinner': {
    size: 20,
    border: '2px solid',
    br: '$full',
    borderColor: '#e0e0e0',
    borderRightColor: '#616161',
    animation: `${Toastify__spin} 0.65s linear infinite`,
  },

  '.Toastify__bounce-enter--top-left, .Toastify__bounce-enter--bottom-left': {
    animationName: Toastify__bounceInLeft,
  },

  '.Toastify__bounce-enter--top-right, .Toastify__bounce-enter--bottom-right': {
    animationName: Toastify__bounceInRight,
  },

  '.Toastify__bounce-enter--top-center': {
    animationName: Toastify__bounceInDown,
  },

  '.Toastify__bounce-enter--bottom-center': {
    animationName: Toastify__bounceInUp,
  },

  '.Toastify__bounce-exit--top-left, .Toastify__bounce-exit--bottom-left': {
    animationName: Toastify__bounceOutLeft,
  },

  '.Toastify__bounce-exit--top-right, .Toastify__bounce-exit--bottom-right': {
    animationName: Toastify__bounceOutRight,
  },

  '.Toastify__bounce-exit--top-center': {
    animationName: Toastify__bounceOutUp,
  },

  '.Toastify__bounce-exit--bottom-center': {
    animationName: Toastify__bounceOutDown,
  },

  '.Toastify__zoom-enter': {
    animationName: Toastify__zoomIn,
  },

  '.Toastify__zoom-exit': {
    animationName: Toastify__zoomOut,
  },

  '.Toastify__flip-enter': {
    animationName: Toastify__flipIn,
  },

  '.Toastify__flip-exit': {
    animationName: Toastify__flipOut,
  },

  '.Toastify__slide-enter--top-left, .Toastify__slide-enter--bottom-left': {
    animationName: Toastify__slideInLeft,
  },

  '.Toastify__slide-enter--top-right, .Toastify__slide-enter--bottom-right': {
    animationName: Toastify__slideInRight,
  },

  '.Toastify__slide-enter--top-center': {
    animationName: Toastify__slideInDown,
  },

  '.Toastify__slide-enter--bottom-center': {
    animationName: Toastify__slideInUp,
  },

  '.Toastify__slide-exit--top-left, .Toastify__slide-exit--bottom-left': {
    animationName: Toastify__slideOutLeft,
  },

  '.Toastify__slide-exit--top-right, .Toastify__slide-exit--bottom-right': {
    animationName: Toastify__slideOutRight,
  },

  '.Toastify__slide-exit--top-center': {
    animationName: Toastify__slideOutUp,
  },

  '.Toastify__slide-exit--bottom-center': {
    animationName: Toastify__slideOutDown,
  },
});
