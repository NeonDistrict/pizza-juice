import React, { HTMLAttributes } from 'react';

import type { SwitchProps as TogglePropsBase } from '@radix-ui/react-switch';

import type { VariantProps, CSS } from '../../system';

import { Box } from '../box';

import * as S from './styles';

export type ToggleProps = {
  /**
   * Size of the toggle.
   *
   * @default "md"
   */
  size?: VariantProps<typeof S.Switch>['size'];
  /**
   * CSS properties
   */
  css?: CSS;
} & TogglePropsBase &
  HTMLAttributes<HTMLDivElement>;

/**
 * Toggle component
 *
 * @description can switch between enabled or disabled states.
 */
export const Toggle = ({ css, ...props }: ToggleProps) => {
  const { size } = props;

  return (
    <Box css={css}>
      <S.Switch {...props}>
        <S.Thumb size={size} />
      </S.Switch>
    </Box>
  );
};
