import React from 'react';

import * as RVisuallyHidden from '@radix-ui/react-visually-hidden';

import { CSS } from '../../system';
import { cx, forwardRef } from '../../utils';

export type VisuallyHiddenProps = {
  /**
   * CSS properties
   */
  css?: CSS;
} & RVisuallyHidden.VisuallyHiddenProps;

/**
 * Visually Hidden component
 *
 * @description common technique used in web accessibility to hide content from the visual client, but keep it readable for screen readers.
 */
export const VisuallyHidden = forwardRef<VisuallyHiddenProps, 'div'>(
  (props, ref) => {
    const { className, children } = props;

    return (
      <RVisuallyHidden.Root
        ref={ref}
        className={cx('visually-hidden', className)}
      >
        {children}
      </RVisuallyHidden.Root>
    );
  },
);
