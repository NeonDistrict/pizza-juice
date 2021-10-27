import { HTMLAttributes } from 'react';

import styled from '@neon-district/system';

export type BoxProps = HTMLAttributes<HTMLDivElement>;

const Box = styled.div<BoxProps>({
  display: 'block'
});

export default Box;
