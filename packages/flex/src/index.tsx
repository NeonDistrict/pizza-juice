import { HTMLAttributes } from 'react';

import styled from '@neon-district/system';

export type FlexProps = HTMLAttributes<HTMLDivElement>;

/**
 * Flex component
 *
 * @description Flex is Box with display. It renders a div element.
 */
export const Flex = styled.div({
  display: 'flex'
});
