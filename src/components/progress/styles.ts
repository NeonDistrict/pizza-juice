import { styled, keyframes } from '../../system';

export const progress = keyframes({
  '0%': { left: '-40%' },
  '100%': { left: '100%' },
});

export const Linear = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  w: '$full',

  /**
   * Variants
   */
  variants: {
    /**
     * Size variant
     */
    size: {
      sm: {
        height: 20,
      },
      md: {
        height: 25,
      },
      lg: {
        height: 35,
      },
    },
    /**
     * Color variant
     */
    color: {
      pink: {
        bg: '$pink-700',
        span: { bg: '$pink-500' },
      },
      green: {
        bg: '$green-700',
        span: { bg: '$green-500' },
      },
      red: {
        bg: '$red-600',
        span: { bg: '$red-500' },
      },
    },
  },

  /**
   * Default variants
   */
  defaultVariants: {
    size: 'md',
    color: 'pink',
  },
});

export const Circular = styled('div', {
  display: 'inline-block',
  position: 'relative',
  verticalAlign: 'middle',
});

export const Indicator = styled('span', {
  d: 'block',
  size: '$full',
});

export const Shape = styled('svg', {
  /**
   * Variants
   */
  variants: {
    /**
     * Size variant
     */
    size: {
      sm: {
        size: 24,
      },
      md: {
        size: 40,
      },
      lg: {
        size: 64,
      },
    },
    /**
     * Color variant
     */

    color: {
      pink: {
        '.pizza-progress__track': {
          stroke: '$pink-700',
        },
        '.pizza-progress__indicator': {
          stroke: '$pink-500',
        },
      },
      green: {
        '.pizza-progress__track': {
          stroke: '$green-700',
        },
        '.pizza-progress__indicator': {
          stroke: '$green-500',
        },
      },
      red: {
        '.pizza-progress__track': {
          stroke: '$red-600',
        },
        '.pizza-progress__indicator': {
          stroke: '$red-500',
        },
      },
    },
  },
});

export const Circle = styled('circle', {
  fill: 'transparent',

  variants: {
    thickness: {
      sm: {
        strokeWidth: 6,
      },
      md: {
        strokeWidth: 10,
      },
      lg: {
        strokeWidth: 14,
      },
    },
  },
});
