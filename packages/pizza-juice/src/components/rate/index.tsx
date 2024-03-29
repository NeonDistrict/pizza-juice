import React, { HTMLAttributes } from 'react';

import { CSS } from '../../system';
import { forwardRef, cx } from '../../utils';

import { Stack } from '../stack';
import { VisuallyHidden } from '../visually-hidden';

import { Star } from '../../icons';

import * as S from './styles';

export type RateProps = {
  /**
   * Total number of selected stars
   */
  value: number;
  /**
   * CSS properties
   */
  css?: CSS;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Rate component
 *
 * @description Ratings provide insight regarding others' opinions and experiences.
 */
export const Rate = forwardRef<RateProps, 'div'>((props) => {
  const { value, className, ...rest } = props;

  if (value < 0 || value > 5) {
    throw new Error('Rate value must be between 0 and 5');
  }

  const totalStars = [...Array(5)];

  const a11yMessage = `${value} out of 5 stars`;

  return (
    <Stack
      gap="4"
      className={cx('rate', className)}
      aria-valuenow={value}
      {...rest}
    >
      {totalStars.map((_, index) => {
        index += 1;
        return (
          <S.StarWrapper
            key={index}
            className={index <= value ? 'active' : undefined}
          >
            <Star viewBox="0 0 576 512" />

            <VisuallyHidden>{`${index} star`}</VisuallyHidden>
          </S.StarWrapper>
        );
      })}

      <VisuallyHidden>{a11yMessage}</VisuallyHidden>
    </Stack>
  );
});
