import { styled } from '../../system';

export const Wrapper = styled('div', {
  textTransform: 'uppercase',
  fontWeight: '$medium',
});

export const HeadingStyled = styled('div', {
  fontSize: '$2xl',
  d: 'flex',
  align: 'center',
  justify: 'space-between',
  position: 'relative',
  mb: '$1',
});

export const Title = styled('h1', {
  w: '$full',
  d: 'flex',
  align: 'center',
  color: '$white',
  fontSize: '$lg',
  fontWeight: '$medium',
  m: 0,
  lineHeight: '24px',
  letterSpacing: '0.1em',

  /**
   * Variants
   */
  variants: {
    /**
     * haveButton variant
     */
    haveButton: {
      true: {
        '@md': {
          justify: 'center',
        },
      },
    },
  },
});

export const FlexEnd = styled('div', {
  d: 'flex',
  gap: '$1',
  align: 'center',
});

export const Line = styled('div', {
  position: 'absolute',
  bottom: -8,
  w: 160,
  height: 2,
  background: '$grey4',

  /**
   * Variants
   */
  variants: {
    /**
     * haveButton variant
     */
    haveButton: {
      true: {},
    },
    /**
     * haveDescription variant
     */
    haveDescription: {
      true: {},
    },
  },
  /**
   * Compounding variants
   */
  compoundVariants: [
    {
      haveButton: 'true',
      haveDescription: 'false',
      css: {
        '@md': {
          d: 'none',
        },
      },
    },
  ],
});

export const Description = styled('div', {
  color: '$grey3',
  borderLeft: '2px solid',
  borderColor: '$grey4',
  pl: '$2',
  mt: '$2',

  '@md': {
    border: 'none',
  },
});

export const FullLine = styled('hr', {
  borderWidth: '0px 0px 1px',
  borderColor: '$grey4',
  borderStyle: 'solid',
  w: '100%',
  m: 0,

  /**
   * Variants
   */
  variants: {
    /**
     * haveButton variant
     */
    haveButton: {
      true: {},
    },
    /**
     * haveDescription variant
     */
    haveDescription: {
      true: {},
    },
  },
  /**
   * Compounding variants
   */
  compoundVariants: [
    {
      haveButton: 'true',
      haveDescription: 'false',
      css: {
        '@md': {
          border: 'none',
        },
      },
    },
  ],
});

export const Bottom = styled('div', {
  d: 'flex',
  flexDirection: 'column',
  gap: '$4',
});
