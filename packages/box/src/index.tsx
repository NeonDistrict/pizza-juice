import { HTMLAttributes } from 'react';

import styled from '@nd-ui/system';

export type BoxProps = HTMLAttributes<HTMLDivElement>;

const Box = styled.div<BoxProps>({
  display: 'block'
});

export default Box;
