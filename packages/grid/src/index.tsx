import { HTMLAttributes } from 'react';

import styled from '@neon-district/system';

export type GridProps = HTMLAttributes<HTMLDivElement>;

export const Grid = styled.div<GridProps>({
  display: 'grid'
});
