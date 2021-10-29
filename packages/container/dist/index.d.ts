import * as styled_components from 'styled-components';
import { HTMLAttributes } from 'react';

declare type ContainerProps = HTMLAttributes<HTMLDivElement>;
/**
 * Container component
 *
 * @description A container component that can be used to wrap other components.
 */
declare const Container: styled_components.StyledComponent<"div", any, ContainerProps, never>;

export { Container, ContainerProps };
