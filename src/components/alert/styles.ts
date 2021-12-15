import { styled } from '../../system';

import { Flex } from '../flex';
import { Text } from '../text';

export const Wrapper = styled(Flex, {
  p: '$4',
  border: '1px solid',
  textTransform: 'uppercase',
  position: 'relative',

  /**
   * Variants
   */
  variants: {
    /**
     * Variant variant
     */
    variant: {
      primary: {
        bg: '$black',
        borderColor: '$grey-700',
      },
      warning: {
        bg: '$yellow-900',
        borderColor: '$yellow-500',
      },
      success: {
        bg: '$green-900',
        borderColor: '$green-500',
      },
      destructive: {
        bg: '$red-900',
        borderColor: '$red-500',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export const Title = styled(Text, {
  variants: {
    variant: {
      primary: {
        color: '$pink-500',
      },
      warning: {
        color: '$yellow-500',
      },
      success: {
        color: '$green-500',
      },
      destructive: {
        color: '$red-500',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export const Subtitle = styled(Text, {
  variants: {
    variant: {
      primary: {
        color: '$white',
      },
      warning: {
        color: '$yellow-500',
      },
      success: {
        color: '$green-500',
      },
      destructive: {
        color: '$red-500',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export const IconWrapper = styled('div', {
  variants: {
    variant: {
      primary: {
        color: '$white',
      },
      warning: {
        color: '$yellow-500',
      },
      success: {
        color: '$green-500',
      },
      destructive: {
        color: '$red-500',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
