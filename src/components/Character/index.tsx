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
  size: 'lg' | 'sm';
  active: boolean;
  index?: number;
  type: string;
  image: string;
}

const Character = ({
  size = 'lg',
  active,
  index,
  type,
  image
}: CharacterProps) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <Container active={active} size={size}>
      <Avatar size={size} image={image} />
      <Overlay>
        <Top>
          <Typename empty={!!type}>{type || 'Empty'}</Typename>
          {!isMobile && !type && <Info>Select a character to assign</Info>}
        </Top>
        <Bottom>
          <Index>{index}</Index>
        </Bottom>
      </Overlay>
    </Container>
  );
};

export default Character;
