import React from 'react';

import { CardProps } from '.';

import Button from '../Button';

import {
  ButtonWrapper,
  Container,
  Divider,
  Image,
  ImageRow,
  Info,
  ItemContainer,
  Subtitle,
  Title
} from './styles';

const SelectLayout = ({ layout = 'A', title, subtitle, images }: CardProps) => {
  const [image] = images || '';

  const layouts = {
    A: (
      <Container layout={layout}>
        <Image src={image} />
        <Info>
          <Title>{title}</Title>
          <Divider />
          <Subtitle>{subtitle}</Subtitle>
        </Info>
      </Container>
    ),
    B: (
      <Container layout={layout}>
        <Image src={image} />
        <Button>ASSIGN</Button>
      </Container>
    ),
    C: (
      <Container layout={layout}>
        <Info>
          <Title>{title}</Title>
          <Divider />
          <Subtitle>{subtitle}</Subtitle>
        </Info>
        <ImageRow>
          {images?.map((src, i) => (
            <Image src={src} key={i} />
          ))}
        </ImageRow>
        <ButtonWrapper>
          <Button>EDIT</Button>
        </ButtonWrapper>
      </Container>
    ),
    D: (
      <Container layout={layout}>
        <ItemContainer>
          <Title>{title}</Title>
          <Divider />
        </ItemContainer>
        <Image src={image} />
        <Subtitle>{subtitle}</Subtitle>
      </Container>
    )
  };

  return layouts[layout];
};

export default SelectLayout;
