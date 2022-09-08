import { keyframes, styled } from '@blockadegames/pizza-juice';

const shimmer = keyframes({
  '100%': {
    transform: 'translateX(100%)',
  },
});

export const Wrapper = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  bg: '$grey-800',

  /**
   * Variants
   */
  variants: {
    isAnimated: {
      true: {
        '&:after': {
          position: 'absolute',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          transform: 'translateX(-100%)',
          backgroundImage:
            'linear-gradient(90deg, rgba(90, 90, 90, 0) 0, rgba(90, 90, 90, 0.2) 20%, rgba(90, 90, 90, 0.5) 60%, rgba(90, 90, 90, 0))',
          WebkitAnimation: `${shimmer} 2s infinite`,
          animation: `${shimmer} 2s infinite`,
          content: '',
        },
      },
      false: {},
    },
    circle: {
      rounded: {
        br: '$full',
      },
    },
  },

  /**
   * Default variants
   */
  defaultVariants: {
    isAnimated: true,
  },
});
