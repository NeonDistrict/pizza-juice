import { HTMLAttributes } from 'react';

import styled from 'styled-components';

export type FlexProps = HTMLAttributes<HTMLDivElement>;

/**
 * Flex component
 *
 * @description Flex is Box with display. It renders a div element.
 */
export const Flex = styled.div({
  display: 'flex'
});
