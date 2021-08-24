import React from 'react';
import { Button } from '../Button';
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

export default function SelectLayout({
  layout = 'A',
  title,
  subtitle,
  images
}) {
  const layouts = {
    A: (
      <Container layout={layout}>
        <Image src={images[0]} />
        <Info>
          <Title>{title}</Title>
          <Divider />
          <Subtitle>{subtitle}</Subtitle>
        </Info>
      </Container>
    ),
    B: (
      <Container layout={layout}>
        <Image src={images[0]} />
        <Button label="ASSIGN" />
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
          {images.map((src, i) => (
            <Image src={src} key={i} />
          ))}
        </ImageRow>
        <ButtonWrapper>
          <Button label="EDIT" />
        </ButtonWrapper>
      </Container>
    ),
    D: (
      <Container layout={layout}>
        <ItemContainer>
          <Title>{title}</Title>
          <Divider />
        </ItemContainer>
        <Image src={images[0]} />
        <Subtitle>{subtitle}</Subtitle>
      </Container>
    )
  };

  return layouts[layout];
}
