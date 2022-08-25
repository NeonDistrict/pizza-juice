import { HTMLAttributes } from 'react';

import { CSS } from '../../system';

export type BoxProps = {
  css?: CSS;
} & HTMLAttributes<HTMLDivElement>;

import { styled } from '../../system';

/**
 * Box component
 *
 * @description abstract component. By default, it renders a div element.
 */
export const Box = styled('div', {
  d: 'block',
});
