import { styled } from '../../system';

export const Wrapper = styled('div', {
  position: 'relative',

  /**
   * Variants
   */
  variants: {
    /**
     * Size variant
     */
    size: {
      '80': {
        size: 80,
      },
      '160': {
        size: 160,
      },
    },
    /**
     * Active variant
     */
    active: {
      true: {
        border: '1px solid $pink1',
      },
    },
  },
});

export const Overlay = styled('div', {
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  d: 'flex',
  flexDirection: 'column',
  justify: 'space-between',
});

export const Top = styled('div', {
  d: 'flex',
  flexDirection: 'column',

  /**
   * Variants
   */
  variants: {
    /**
     * Size variant
     */
    size: {
      '80': {
        p: '$1',
      },
      '160': {
        p: '$3',
      },
    },
  },
});

export const Bottom = styled('div', {
  d: 'flex',
  justifyContent: 'flex-end',

  /**
   * Variants
   */
  variants: {
    /**
     * Size variant
     */
    size: {
      '80': {
        size: '$1',
      },
      '160': {
        p: '$3',
      },
    },
  },
});

export const Typename = styled('div', {
  fontWeight: '$medium',
  color: '$pink1',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',

  /**
   * Variants
   */
  variants: {
    /**
     * Empty variant
     */
    empty: {
      true: {
        color: '$white',
      },
    },
    /**
     * Size variant
     */
    size: {
      '80': {
        fontSize: '$sm',
        lineHeight: '20px',
      },
      '160': {
        fontSize: '$md',
        lineHeight: '24px',
      },
    },
  },
});

export const Info = styled('span', {
  fontSize: '$sm',
  fontWeight: '$medium',
  color: '$white',
  lineHeight: '24px',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
});

export const Index = styled('div', {
  d: 'flex',
  justify: 'center',
  align: 'center',
  bg: '$pink1',
  color: '$white',
  fontWeight: '$medium',

  /**
   * Variants
   */
  variants: {
    /**
     * Size variant
     */
    size: {
      '80': {
        fontSize: '$sm',
        lineHeight: 20,
        size: 20,
      },
      '160': {
        fontSize: '$md',
        lineHeight: 24,
        size: 32,
      },
    },
  },
});
