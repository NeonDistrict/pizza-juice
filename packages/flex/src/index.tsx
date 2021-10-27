import { HTMLAttributes } from 'react';

import styled from '@neon-district/system';

export type FlexProps = HTMLAttributes<HTMLDivElement>;

const Flex = styled.div({
  display: 'flex'
});

export default Flex;
