import React, { createContext } from 'react';
import { theme } from '../styles/theme';

export const ComponentContext = createContext({});

export const ComponentProvider = ({ children }) => (
  <ComponentContext.Provider value={theme}>
    {children}
  </ComponentContext.Provider>
);
