import { HTMLAttributes } from 'react';

import styled from '@neon-district/system';

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

/**
 * Container component
 *
 * @description A container component that can be used to wrap other components.
 */
export const Container = styled('div')<ContainerProps>(({ theme }) => ({
  // reset
  boxSizing: 'border-box',
  flexShrink: 0,

  width: theme.spaces.full,
  maxWidth: theme.breakpoints['2xl'],
  margin: '0 auto',
  padding: `0 ${theme.spaces[4]}`
}));
