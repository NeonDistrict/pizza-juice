import { HTMLAttributes } from 'react';

import styled from '@neon-district/system';

export type FlexProps = HTMLAttributes<HTMLDivElement>;

export const Flex = styled.div({
  display: 'flex'
});
