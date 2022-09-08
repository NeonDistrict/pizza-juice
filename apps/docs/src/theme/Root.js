import React from 'react';

import { PizzaJuiceProvider } from '@blockadegames/pizza-juice';

export default function Root({ children }) {
  return <PizzaJuiceProvider>{children}</PizzaJuiceProvider>;
}
