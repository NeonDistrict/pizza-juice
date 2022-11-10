import { styled } from '../../system';

import * as RTooltip from '@radix-ui/react-tooltip';

export const Provider = styled(RTooltip.Provider);

export const Root = styled(RTooltip.Root);

export const Trigger = styled(RTooltip.Trigger);

export const Content = styled(RTooltip.Content, {
  color: '$white',
  bg: '$black',
  p: '$2',
  textTransform: 'uppercase',
  fontSize: '$sm',
  border: '1px solid $grey-700',
});

export const Arrow = styled(RTooltip.Arrow, {
  fill: '$grey-700',
});
