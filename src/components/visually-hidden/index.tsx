import React from 'react';

import { Root, VisuallyHiddenProps } from '@radix-ui/react-visually-hidden';

const VisuallyHidden = ({ children }: VisuallyHiddenProps) => {
  return <Root>{children}</Root>;
};

export default VisuallyHidden;
