import { HTMLAttributes } from 'react';

import styled from '@neon-district/system';

export type GridProps = HTMLAttributes<HTMLDivElement>;

/**
 * Grid component
 *
 * @description is a Box with display: grid and it comes with helpful style shorthand. It renders a div element.
 */
export const Grid = styled.div<GridProps>({
  display: 'grid'
});
