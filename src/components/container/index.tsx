import { ComponentProps, styled } from '../../system';

export type ContainerProps = ComponentProps<typeof Container>;

/**
 * Container component
 *
 * @description A container component that can be used to wrap other components.
 */
export const Container = styled('div', {
  // reset
  boxSizing: 'border-box',
  flexShrink: 0,

  w: '$full',
  maxW: '$2xl',
  m: '0 auto',
  px: '$4'
});
