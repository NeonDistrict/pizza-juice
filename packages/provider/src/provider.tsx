import React from 'react';

import { cssReset } from '@pizza-juice/css-reset';

type PizzaJuiceProviderProps = {
  children: React.ReactNode;
};

export const PizzaJuiceProvider = ({ children }: PizzaJuiceProviderProps) => {
  cssReset();

  return <>{children}</>;
};
