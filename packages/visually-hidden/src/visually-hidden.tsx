import React from 'react';

import { Root, VisuallyHiddenProps } from '@radix-ui/react-visually-hidden';

export const VisuallyHidden = ({ children }: VisuallyHiddenProps) => {
  return <Root>{children}</Root>;
};
