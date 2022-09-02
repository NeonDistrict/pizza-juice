import React, { HTMLAttributes } from 'react';

import { VariantProps, CSS } from '../../system';
import { cx, forwardRef } from '../../utils';

import * as S from './styles';

export type BadgeProps = {
  /**
   * Rarity of the item badge.
   * @default "common"
   */
  rarity?: VariantProps<typeof S.Wrapper>['rarity'];
  /**
   * CSS properties
   */
  css?: CSS;
} & HTMLAttributes<HTMLDivElement>;

const spaceOnCamelCase = (str?: VariantProps<typeof S.Wrapper>['rarity']) =>
  typeof str === 'string' && str.replace(/([a-z])([A-Z])/g, '$1 $2');

/**
 * Badge component
 *
 * @description Badges are used to highlight an item's status for quick recognition.
 */
export const Badge = forwardRef<BadgeProps, 'div'>((props, ref) => {
  const { rarity, className, ...rest } = props;

  return (
    <S.Wrapper
      ref={ref}
      className={cx('badge', className)}
      rarity={rarity}
      {...rest}
    >
      <S.Tail />
      <S.Space />
      <S.Badge>{spaceOnCamelCase(rarity)}</S.Badge>
    </S.Wrapper>
  );
});
