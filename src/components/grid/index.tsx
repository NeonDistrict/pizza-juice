import { HTMLAttributes } from 'react';

import { CSS } from '../../system';

export type GridProps = {
  css?: CSS;
} & HTMLAttributes<HTMLDivElement>;

import { styled } from '../../system';

/**
 * Grid component
 *
 * @description is a Box with d: grid and it comes with helpful style shorthand. It renders a div element.
 */
export const Grid = styled('div', {
  d: 'grid'
});
