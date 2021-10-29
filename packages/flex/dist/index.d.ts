import * as styled_components from 'styled-components';
import { HTMLAttributes } from 'react';

declare type FlexProps = HTMLAttributes<HTMLDivElement>;
/**
 * Flex component
 *
 * @description Flex is Box with display. It renders a div element.
 */
declare const Flex: styled_components.StyledComponent<"div", any, {}, never>;

export { Flex, FlexProps };
