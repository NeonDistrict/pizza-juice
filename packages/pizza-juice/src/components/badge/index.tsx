import React, { HTMLAttributes } from 'react';

import { VariantProps, CSS } from '../../system';

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
export const Badge = ({ rarity, ...props }: BadgeProps) => {
  return (
    <S.Wrapper rarity={rarity} {...props}>
      <S.Tail />
      <S.Space />
      <S.Badge>{spaceOnCamelCase(rarity)}</S.Badge>
    </S.Wrapper>
  );
};
