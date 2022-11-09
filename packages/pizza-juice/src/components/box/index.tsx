import { styled, ComponentProps } from '../../system';

export type BoxProps = ComponentProps<typeof Box>;

/**
 * Box component
 *
 * @description abstract component. By default, it renders a div element.
 */
export const Box = styled('div');
