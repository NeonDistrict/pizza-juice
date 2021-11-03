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
    color: '$grey4'
  },

  /**
   * Variants
   */
  variants: {
    /**
     * Active variant
     */
    active: {
      true: {
        color: '$white',
        bg: '$grey1',
        borderColor: 'transparent',

        svg: {
          color: '$grey3'
        }
      }
    },
    /**
     * Removable variant
     */
    removable: {
      true: {
        pr: '$1'
      }
    },
    /**
     * Image variant
     */
    image: {
      true: {
        pl: 0,
        gap: '$1'
      }
    },
    /**
     * Icon variant
     */
    icon: {
      true: {
        pl: '$2',
        gap: '$1'
      }
    }
  }
});

export const RemoveWrapper = styled('div', {
  color: '$black',
  position: 'relative',
  f: 'flex',
  align: 'center',
  justify: 'center',
  br: '$full',
  cursor: 'pointer',
  bg: '$grey1',

  /**
   * Variants
   */
  variants: {
    /**
     * Active variant
     */
    active: {
      true: {
        bg: '$white'
      }
    }
  }
});

export const RelativeAvatar = styled(Avatar, {
  position: 'relative',
  left: -1
});
