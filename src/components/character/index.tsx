import React from 'react';

import { useMediaQuery } from '../../hooks';

import { Avatar } from '../avatar';

import { Wrapper, Overlay, Top, Bottom, Index, Typename, Info } from './styles';

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
  src?: string;
  /**
   *
   */
  alt?: string;
};

export const Character = ({
  active,
  index,
  type,
  src,
  alt
}: CharacterProps) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const size = isMobile ? 'md' : 'xl';

  return (
    <Wrapper active={active} size={size}>
      <Avatar size={size} src={src} alt={alt} />

      <Overlay>
        <Top size={size}>
          <Typename size={size} empty={!!type}>
            {type || 'Empty'}
          </Typename>

          {!isMobile && !type && <Info>Select a character to assign</Info>}
        </Top>

        <Bottom size={size}>
          <Index size={size}>{index}</Index>
        </Bottom>
      </Overlay>
    </Wrapper>
  );
};
