import { HTMLAttributes } from 'react';

import styled from '@nd-ui/system';

export type FlexProps = HTMLAttributes<HTMLDivElement>;

const Flex = styled.div({
  display: 'flex'
});

export default Flex;
