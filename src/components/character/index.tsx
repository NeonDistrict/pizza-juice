import React from 'react';

import { useMediaQuery } from '../../hooks';

import { Avatar } from '../avatar';

import * as S from './styles';

export type CharacterProps = {
  /**
   *
   */
  active: boolean;
  /**
   *
   */
  index?: number;
  /**
   *
   */
  type?: string;
  /**
   *
   */
  src: string;
  /**
   *
   */
  alt: string;
};

/**
 * Character component
 *
 * @description can be used to represent people or objects.
 */
export const Character = ({
  active,
  index,
  type,
  src,
  alt
}: CharacterProps) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const size = isMobile ? 'md' : 'lg';

  return (
    <S.Wrapper active={active} size={size}>
      <Avatar size={size} src={src} alt={alt} />

      <S.Overlay>
        <S.Top size={size}>
          <S.Typename size={size} empty={!!type}>
            {type || 'Empty'}
          </S.Typename>

          {!isMobile && !type && <S.Info>Select a character to assign</S.Info>}
        </S.Top>

        <S.Bottom size={size}>
          <S.Index size={size}>{index}</S.Index>
        </S.Bottom>
      </S.Overlay>
    </S.Wrapper>
  );
};
