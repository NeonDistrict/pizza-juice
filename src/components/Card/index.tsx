import React from 'react';
import { Container, Image, Text } from './styles';

export interface CardProps {
  text: string;
  src: string;
}

export const Card = ({ text, src }: CardProps) => {
  return (
    <Container>
      <Image src={src} />
      <Text>{text}</Text>
    </Container>
  );
};
