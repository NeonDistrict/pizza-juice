import Avatar from '../Avatar';
import React from 'react';
import {
  Container,
  Overlay,
  Top,
  Bottom,
  Index,
  Typename,
  Info
} from './styles';
import { useMediaQuery } from '../../hooks';

export interface CharacterProps {
  active: boolean;
  index?: number;
  type: string;
  image: string;
}

const Character = ({ active, index, type, image }: CharacterProps) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const size = isMobile ? 'sm' : 'lg';

  return (
    <Container active={active} size={size}>
      <Avatar size={size} image={image} />
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
    </Container>
  );
};

export default Character;
