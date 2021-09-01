import { createContext } from 'react';
import { theme } from 'styles/theme';

export const ComponentContext = createContext(theme);

export const ComponentProvider = ComponentContext.Provider;
