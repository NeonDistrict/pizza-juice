import React from 'react';

import { useMediaQuery } from '../../hooks';

import { Avatar } from '../avatar';

import { Button } from '../button';

import * as S from './styles';

export type CharacterProps = {
  /**
   *  If the character is selected or not.
   */
  active?: boolean;
  /**
   * The character index in the team list
   */
  currentIndex?: number;
  /**
   * The character class type
   */
  type?: string;
  /**
   * The source of the image (url)
   */
  src: string;
  /**
   *  Alt text for image
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
  currentIndex,
  type,
  src,
  alt,
  ...props
}: CharacterProps) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const size = isMobile ? '80' : '160';

  return (
    <S.Wrapper active={active} size={size} {...props}>
      <Avatar size={size} src={src} alt={alt} />

      <S.Overlay>
        <S.Top size={size}>
          <S.Typename size={size} empty={!!type}>
            {type || 'Empty'}
          </S.Typename>

          {!isMobile && !type && !active && (
            <S.Info>Select a character to assign</S.Info>
          )}
        </S.Top>
        <S.Center>
          {!isMobile && !type && active && (
            <Button css={{ w: '100%' }}>Assign</Button>
          )}
        </S.Center>
        {currentIndex && (
          <S.Bottom size={size}>
            <S.Index size={size}>{currentIndex}</S.Index>
          </S.Bottom>
        )}
      </S.Overlay>
    </S.Wrapper>
  );
};
