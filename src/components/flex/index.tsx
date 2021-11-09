import { HTMLAttributes } from 'react';

import { CSS } from '../../system';

export type FlexProps = {
  css?: CSS;
} & HTMLAttributes<HTMLDivElement>;

import { styled } from '../../system';

/**
 * Flex component
 *
 * @description Flex is Box with display. It renders a div element.
 */
export const Flex = styled('div', {
  d: 'flex',
});
