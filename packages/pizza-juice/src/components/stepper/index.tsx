import React, { HTMLAttributes } from 'react';

import { CSS } from '../../system';

import { useBreakpoint } from '../../hooks';
import { forwardRef, cx } from '../../utils';

import { DesktopStepper } from './desktop';
import { MobileStepper } from './mobile';
import { useStepper } from './use-stepper';

/**
 * Step component
 */
export type StepperProps = {
  /**
   * The active item
   */
  activeItem: number;
  /**
   * Array of steps
   */
  items: string[];
  /**
   * CSS properties
   */
  css?: CSS;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Steps component
 *
 * @description This component is used to render a list of steps.
 */
export const Stepper = forwardRef<StepperProps, 'div'>((props, ref) => {
  const { activeItem, items, className, ...rest } = props;

  const { totalItems } = useStepper(activeItem, items);

  const isDesktop = useBreakpoint('sm');

  if (activeItem < 1) {
    throw new Error('The activeItem prop must be greater than 0.');
  }

  if (props.activeItem > totalItems) {
    throw new Error(
      `The active item (${activeItem}) is greater than the number of items (${totalItems})`,
    );
  }

  return (
    <>
      {isDesktop ? (
        <DesktopStepper
          ref={ref}
          className={cx('stepper', className)}
          activeItem={activeItem}
          items={items}
          {...rest}
        />
      ) : (
        <MobileStepper
          ref={ref}
          className={cx('stepper', className)}
          activeItem={activeItem}
          items={items}
          {...rest}
        />
      )}
    </>
  );
});
