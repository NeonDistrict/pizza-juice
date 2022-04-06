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
  color: 'transparent',
  overflow: 'hidden',
  position: 'absolute',
  inset: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  size: '$full',
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
        // opacity: 0,
        filter: 'grayscale(1) blur(2px)',
      },
      false: {
        // opacity: 1,
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
