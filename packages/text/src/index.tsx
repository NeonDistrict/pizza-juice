import { ComponentProps } from 'react';

import styled from '@nd-ui/system';

export type TextProps = ComponentProps<typeof Text>;

export const Text = styled('span', {
  lineHeight: '1',
  margin: '0',
  fontWeight: '$normal',
  display: 'block',
  color: '$white',

  /**
   * Variants
   */
  variants: {
    size: {
      '3xs': {
        fontSize: '$3xs'
      },
      '2xs': {
        fontSize: '$2xs'
      },
      xs: {
        fontSize: '$xs'
      },
      sm: {
        fontSize: '$sm'
      },
      md: {
        fontSize: '$md'
      },
      lg: {
        fontSize: '$lg'
      }
    }
  }
});
