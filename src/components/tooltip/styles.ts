import { styled } from '../../system';

import {
  Content as BaseContent,
  Arrow as BaseArrow
} from '@radix-ui/react-tooltip';

export const Content = styled(BaseContent, {
  p: '$2',
  fontSize: '$sm',
  color: '$white',
  bg: 'transparent',
  border: '1px solid',
  borderColor: '$grey4'
});

export const Arrow = styled(BaseArrow, {
  fill: '$grey4'
});
