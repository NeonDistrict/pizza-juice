import * as styled_components from 'styled-components';
import { HTMLAttributes } from 'react';

declare type GridProps = HTMLAttributes<HTMLDivElement>;
/**
 * Grid component
 *
 * @description is a Box with display: grid and it comes with helpful style shorthand. It renders a div element.
 */
declare const Grid: styled_components.StyledComponent<"div", any, GridProps, never>;

export { Grid, GridProps };
