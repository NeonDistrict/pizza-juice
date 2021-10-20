import { ComponentProps } from '@stitches/react';

import styled from '@nd-ui/system';

export type FlexProps = ComponentProps<typeof Flex>;

const Flex = styled('div', {
  display: 'flex'
});

export default Flex;
