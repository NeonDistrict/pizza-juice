import { styled, keyframes } from '../../system';

const loading = keyframes({
  from: {
    opacity: 0.9,
  },
  to: {
    opacity: 0.5,
  },
});

export const Wrapper = styled('div', {
  position: 'relative',
  w: '$full',
  lineHeight: 0,
});

export const Loading = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  w: '$full',
  h: '$full',
  bg: '$grey-700',
  animation: `${loading} 1s infinite linear running alternate`,
});

export const Image = styled('img', {
  position: 'relative',
  w: '$full',
  maxW: '$full',
  transitionTimingFunction: 'cubic-bezier(.2, 0, .2, 1)',
  transitionDuration: '0.3s',

  /**
   * Variants
   */
  variants: {
    /**
     * Object fit variant
     */
    objectFit: {
      true: {
        objectFit: 'cover',
      },
      false: {
        objectFit: 'contain',
      },
    },

    /**
     * Cover variant
     */
    cover: {
      true: {
        backgroundSize: 'cover',
      },
      false: {
        backgroundSize: 'contain',
      },
    },

    /**
     * Loading variant
     */
    isLoading: {
      true: {
        filter: 'grayscale(1) blur(5px)',
      },
      false: {
        filter: 'grayscale(0) blur(0px)',
      },
    },
  },

  /**
   * Default variants
   */
  defaultVariants: {
    objectFit: 'true',
    cover: 'true',
  },
});
