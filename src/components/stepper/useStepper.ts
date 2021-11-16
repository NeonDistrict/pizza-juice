import { useMemo } from 'react';

import { StepperProps } from '.';

/**
 * UseStepper hook
 *
 * @description used to manage stepper state
 */
export const useStepper = (
  activeItem: StepperProps['activeItem'],
  items: StepperProps['items'],
) => {
  // total number of steps
  const totalItems = useMemo(() => items.length, [items]);

  // current step label (-1 because starts at 0)
  const activeItemLabel = useMemo(
    () => items[activeItem - 1],
    [items, activeItem],
  );

  return { totalItems, activeItemLabel };
};
