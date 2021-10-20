import { ComponentProps } from '@stitches/react';

import styled from '@nd-ui/system';

export type BoxProps = ComponentProps<typeof Box>;

const Box = styled('div', {
  display: 'block'
});

export default Box;
