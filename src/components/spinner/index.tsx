import React, { HTMLAttributes } from 'react';

import { CSS } from '../../system';

import { VisuallyHidden } from '../visually-hidden';

import * as S from './styles';

export type SpinnerProps = {
  /**
   * CSS properties
   */
  css?: CSS;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Spinner component
 *
 * @description provide a visual cue that an action is either processing, awaiting a course of change or a result.
 *
 * @example
 * ```jsx
 * <Spinner css={{
 *    $$color: '$colors$white',
 *    $$size: '16px',
 *    $$thickness: 2,
 *    $$speed: '0.4s'
 * }}
 * ```
 */
export const Spinner = ({ ...props }: SpinnerProps) => {
  return (
    <S.Spinner {...props}>
      <VisuallyHidden>Loading</VisuallyHidden>
    </S.Spinner>
  );
};
