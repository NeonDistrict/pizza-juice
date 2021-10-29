import * as styled_components from 'styled-components';
import { HTMLAttributes } from 'react';

declare type BoxProps = HTMLAttributes<HTMLDivElement>;
/**
 * Box component
 *
 * @description abstract component. By default, it renders a div element.
 */
declare const Box: styled_components.StyledComponent<"div", any, BoxProps, never>;

export { Box, BoxProps };
