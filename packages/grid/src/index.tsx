import { HTMLAttributes } from 'react';

import styled from '@nd-ui/system';

export type GridProps = HTMLAttributes<HTMLDivElement>;

const Grid = styled.div<GridProps>({
  display: 'grid'
});

export default Grid;
