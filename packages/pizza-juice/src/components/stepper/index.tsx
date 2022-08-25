import React, { HTMLAttributes } from 'react';

import { CSS } from '../../system';

import { useBreakpoint } from '../../hooks';

import { DesktopStepper } from './desktop';
import { MobileStepper } from './mobile';
import { useStepper } from './useStepper';

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
export const Stepper = ({ ...props }: StepperProps) => {
  const { activeItem, items } = props;

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
      {isDesktop ? <DesktopStepper {...props} /> : <MobileStepper {...props} />}
    </>
  );
};
