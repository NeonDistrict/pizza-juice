import { ComponentProps } from '@stitches/react';

import styled from '@district-ui/system';

export type ContainerProps = ComponentProps<typeof Container>;

const Container = styled('div', {
  // reset
  boxSizing: 'border-box',
  flexShrink: 0,

  w: '$full',
  mx: 'auto',
  px: '$5',

  variants: {
    maxW: {
      sm: {
        maxW: '$sm'
      },
      md: {
        maxW: '$md'
      },
      lg: {
        maxW: '$lg'
      },
      xl: {
        maxW: '$xl'
      },
      '2xl': {
        maxW: '$2xl'
      }
    }
  }
});

export default Container;
