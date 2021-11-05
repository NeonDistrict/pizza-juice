import { styled } from '../../system';

export const Wrapper = styled('div', {
  d: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

export const Title = styled('h3', {
  d: 'inline-flex',
  gap: '$2',
  align: 'center',
  fontWeight: '$medium',
  fontSize: '$lg',
  lineHeight: '24px',
  margin: 0,
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  color: '$white',

  '@md': {
    fontSize: '$md',
    lineHeight: '20px',
    letterSpacing: '0.1em',
  },

  svg: {
    color: '$white',
    fontSize: '19px',

    '@md': {
      fontSize: '13px',
    },
  },
});

export const Description = styled('p', {
  fontFamily: 'Titillium Web',
  fontSize: '$md',
  fontWeight: '$medium',
  lineHeight: '24px',
  color: '$grey3',
  textTransform: 'uppercase',
  letterSpacing: '0.03em',
  m: 0,

  '@md': {
    fontSize: '$sm',
    lineHeight: '20px',
    fontWeight: '$normal',
    letterSpacing: 0,
  },

  /**
   * Variants
   */
  variants: {
    /**
     * Line variant
     */
    line: {
      true: {
        borderLeft: '2px solid $white',
        pl: '$4',
      },
    },
  },

  /**
   * Default variants
   */
  defaultVariants: {
    line: 'true',
  },
});
