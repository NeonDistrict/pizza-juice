import { keyframes, styled } from '../../system';
import { Swiper as BaseSwiper } from 'swiper/react/swiper-react.js';

const spinPreload = keyframes({
  '100%': { transform: 'rotate(360deg)' },
});

export const Swiper = styled(BaseSwiper, {
  position: 'relative',
  mx: 'auto',
  listStyle: 'none',
  padding: 0,
  zIndex: 1,
  overflow: 'hidden',
  // https://github.com/nolimits4web/swiper/issues/2914#issuecomment-765879488
  w: '$full',

  '.swiper-wrapper': {
    position: 'relative',
    w: '$full',
    h: '$full',
    d: 'flex',
    zIndex: 1,
    transitionProperty: 'transform',
  },

  '.swiper-android .swiper-slide, .swiper-wrapper': {
    transform: 'translate3d(0px, 0, 0)',
  },

  '.swiper-pointer-events': {
    touchAction: 'pan-y',
  },

  '.swiper-slide': {
    flexShrink: 0,
    // https://github.com/nolimits4web/swiper/issues/2914#issuecomment-765879488
    w: '100% !important',
    h: '$full',
    position: 'relative',
    transitionProperty: 'transform',
  },

  '.swiper-slide-invisible-blank': {
    visibility: 'hidden',
  },

  // for a11y
  '.swiper-notification': {
    position: 'absolute',
    left: 0,
    top: 0,
    pointerEvents: 'none',
    opacity: 0,
    zIndex: -1000,
    visibility: 'hidden',
  },

  // Lazy
  '.swiper-lazy-preloader': {
    size: 40,
    position: 'absolute',
    left: '50%',
    top: '50%',
    ml: -21,
    mt: -21,
    zIndex: 5,
    transformOrigin: '50%',
    animation: `${spinPreload} 1s infinite linear`,
    border: '4px solid $white',
    br: '$half',
    borderTopColor: 'transparent',
  },

  /**
   * Variants
   */
  variants: {
    /**
     * Show bullet variant
     */
    hasPagination: {
      true: {
        '.swiper-pagination': {
          position: 'absolute',
          textAlign: 'center',
          transition: '300ms opacity',
          transform: 'translate3d(0, 0, 0)',
          zIndex: 2,

          '&.swiper-pagination-hidden': {
            opacity: 0,
          },
        },

        '.swiper-pagination-bullets': {
          bottom: 10,
          w: '$full',
        },

        '.swiper-pagination-bullet': {
          size: 8,
          d: 'inline-block',
          br: '$half',
          bg: '$pink-700',
          cursor: 'pointer',
          opacity: 0.2,
          m: '0 $1',

          '&:only-child': {
            d: 'none !important',
          },
        },

        '.swiper-pagination-bullet-active': {
          opacity: 1,
          bg: '$pink-500',
        },

        '.swiper-pagination-lock': {
          d: 'none',
        },
      },
      false: {},
    },
    /**
     * Show arrows variant
     */
    hasNavigation: {
      true: {
        '.swiper-button-prev, .swiper-button-next': {
          position: 'absolute',
          d: 'flex',
          align: 'center',
          justify: 'center',
          size: 40,
          bg: '$grey-700',
          br: '$full',
          cursor: 'pointer',
          bottom: 0,
          zIndex: 3,

          '&.swiper-button-disabled': {
            opacity: 0.35,
            cursor: 'auto',
            pointerEvents: 'none',
          },
        },

        '.swiper-button-prev': {
          left: 0,
          backgroundImage:
            'url("data:image/svg+xml;base64,PHN2Zw0KICBzdHJva2U9IiNBNUE1QTUiDQogIGZpbGw9Im5vbmUiDQogIHN0cm9rZS13aWR0aD0iMCINCiAgdmlld0JveD0iMCAwIDI0IDI0Ig0KICBoZWlnaHQ9IjFlbSINCiAgd2lkdGg9IjFlbSINCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIg0KPg0KICA8cGF0aA0KICAgIHN0cm9rZS1saW5lY2FwPSJyb3VuZCINCiAgICBzdHJva2UtbGluZWpvaW49InJvdW5kIg0KICAgIHN0cm9rZS13aWR0aD0iMiINCiAgICBkPSJNMTUgMTlsLTctNyA3LTciDQogID48L3BhdGg+DQo8L3N2Zz4NCg==")',
          backgroundSize: 20,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',

          '&:after': {
            content: 'Previous',
            visibility: 'hidden',
          },
        },

        '.swiper-button-next': {
          right: 0,
          backgroundImage:
            'url("data:image/svg+xml;base64,PHN2Zw0KICBzdHJva2U9IiNBNUE1QTUiDQogIGZpbGw9Im5vbmUiDQogIHN0cm9rZS13aWR0aD0iMCINCiAgdmlld0JveD0iMCAwIDI0IDI0Ig0KICBoZWlnaHQ9IjFlbSINCiAgd2lkdGg9IjFlbSINCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIg0KPg0KPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik05IDVsNyA3LTcgNyI+PC9wYXRoPg0KPC9zdmc+DQo=")',
          backgroundSize: 20,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',

          '&:after': {
            content: 'Next',
            visibility: 'hidden',
          },
        },

        '.swiper-button-lock': {
          d: 'none',
        },
      },
      false: {},
    },
  },
  compoundVariants: [
    {
      hasPagination: true,
      css: {
        pb: '$15',
      },
    },
    {
      hasNavigation: true,
      css: {
        pb: '$15',
      },
    },
  ],
});
