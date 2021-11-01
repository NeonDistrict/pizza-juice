import { HTMLAttributes } from 'react';

import styled from 'styled-components';

export type BoxProps = HTMLAttributes<HTMLDivElement>;

/**
 * Box component
 *
 * @description abstract component. By default, it renders a div element.
 */
export const Box = styled.div<BoxProps>({
  display: 'block'
});
