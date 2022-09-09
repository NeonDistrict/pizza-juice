import React from 'react';

import { CSSReset } from '../css-reset';

export type PizzaJuiceProviderProps = {
  /**
   * If `true`, `CSSReset` component will be mounted to help
   * you reset browser styles
   *
   * @default true
   */
  resetCss?: boolean;
  /**
   * Your application content
   */
  children?: React.ReactNode;
};

export const PizzaJuiceProvider = (props: PizzaJuiceProviderProps) => {
  const { resetCss = true, children } = props;

  if (resetCss) {
    CSSReset();
  }

  return <>{children}</>;
};
