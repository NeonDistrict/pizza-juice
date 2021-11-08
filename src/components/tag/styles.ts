import { styled } from '../../system';

import { Avatar } from '../avatar';

export const TagStyles = styled('div', {
  position: 'absolute',
  d: 'inline-flex',
  align: 'center',
  justify: 'center',
  px: '$4',
  color: '$grey3',
  gap: '$1',
  fontWeight: '$bold',
  textTransform: 'uppercase',
  border: '1px solid $grey3',
  lineHeight: '150%',
  br: '$md',

  svg: {
    color: '$white',
  },

  /**
   * Variants
   */
  variants: {
    /**
     * Active variant
     */
    style: {
      grey: {
        color: '$white',
        bg: '$grey1',
        borderColor: 'transparent',

        svg: {
          color: '$grey3',
        },
      },
      outlined: {}
    },
    /**
     * Removable variant
     */
    removable: {
      true: {
        pr: '$1',
      },
    },
    /**
     * Image variant
     */
    image: {
      true: {
        pl: 0,
        gap: '$1',
      },
    },
    /**
     * Icon variant
     */
    icon: {
      true: {
        pl: '$2',
        gap: '$1',
      },
    },
  },
});

export const RemoveWrapper = styled('div', {
  color: '$white',
  position: 'relative',
  d: 'flex',
  p: '$1',
  align: 'center',
  justify: 'center',
  br: '$full',
  cursor: 'pointer',
  bg: '$grey4',
});

export const RelativeAvatar = styled(Avatar, {
  position: 'relative',
  left: -1,
});
