import * as React from 'react';

import { CSS } from '../../system';

/**
 * Copy from Chakra UI forwardRef
 *
 * @see https://github.com/chakra-ui/chakra-ui/blob/703293367a/packages/system/src/system.types.tsx
 */
export function forwardRef<Props extends object, Component extends As>(
  component: React.ForwardRefRenderFunction<
    any,
    RightJoinProps<PropsOf<Component>, Props>
  >,
) {
  return React.forwardRef(component) as unknown as ComponentWithAs<
    Component,
    Props
  >;
}

export type As<Props = any> = React.ElementType<Props>;

/**
 * Extract the props of a React element or component
 */
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As;
  css?: CSS;
};

export type OmitCommonProps<
  Target,
  OmitAdditionalProps extends keyof any = never,
> = Omit<Target, OmitAdditionalProps>;

export type RightJoinProps<
  SourceProps extends object = {},
  OverrideProps extends object = {},
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;

export type MergeWithAs<
  ComponentProps extends object,
  AsProps extends object,
  AdditionalProps extends object = {},
  AsComponent extends As = As,
> = RightJoinProps<ComponentProps, AdditionalProps> &
  RightJoinProps<AsProps, AdditionalProps> & {
    as?: AsComponent;
  };

export type ComponentWithAs<Component extends As, Props extends object = {}> = {
  <AsComponent extends As>(
    props: MergeWithAs<
      React.ComponentProps<Component>,
      React.ComponentProps<AsComponent>,
      Props,
      AsComponent
    >,
  ): JSX.Element;
};
