import styled from '@neon-district/system';

import {
  Content as BaseContent,
  Arrow as BaseArrow
} from '@radix-ui/react-tooltip';

export const Content = styled(BaseContent)(({ theme }) => ({
  padding: theme.spaces[2],
  fontSize: theme.fontSizes.sm,
  color: theme.colors.white,
  background: theme.colors.black,
  border: '1px solid',
  borderColor: theme.colors.grey4
}));

export const Arrow = styled(BaseArrow)(({ theme }) => ({
  fill: theme.colors.grey4
}));
