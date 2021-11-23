import { styled } from '../../system';

import * as BaseTooltip from '@radix-ui/react-tooltip';

export const Root = styled(BaseTooltip.Root);

export const Trigger = styled(BaseTooltip.Trigger);

export const Content = styled(BaseTooltip.Content, {
  color: '$white',
  bg: '$transparent',
  p: '$2',
  textTransform: 'uppercase',
  fontSize: '$sm',
  border: '1px solid $grey-700',
});

export const Arrow = styled(BaseTooltip.Arrow, {
  fill: '$grey-700',
});
