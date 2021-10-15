import Button from '../Button';
import React, { ReactElement, useRef } from 'react';
import {
  ItemContainer,
  ItemImage,
  Overlay,
  ArrowContainer,
  StyledSlider,
  Controls,
  CarouselContainer
} from './styles';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export interface CarouselItemProps {
  image?: string;
  alt?: string;
  label?: string;
}

export interface CarouselProps {
  children?:
    | ReactElement<CarouselItemProps>
    | ReactElement<CarouselItemProps>[];
}

const CarouselItem = ({ image, alt, label }: CarouselItemProps) => {
  return (
    <ItemContainer>
      <ItemImage src={image} alt={alt} />
      {label && (
        <Overlay>
          <Button>{label}</Button>
        </Overlay>
      )}
    </ItemContainer>
  );
};

interface ArrowProps {
  direction: 'left' | 'right';
  onClick?: () => void;
  style?: Record<string, string | number>;
}

const Arrow = ({ direction, onClick, style }: ArrowProps) => {
  return (
    <ArrowContainer className="slick-arrow" onClick={onClick}>
      {direction === 'left' ? (
        <BsChevronLeft cursor="pointer" />
      ) : (
        <BsChevronRight cursor="pointer" />
      )}
    </ArrowContainer>
  );
};

const Carousel = ({ children }: CarouselProps) => {
  const slider = useRef<any>(null);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };

  const next = () => {
    slider.current.slickNext();
  };

  const prev = () => {
    slider.current.slickPrev();
  };

  return (
    <CarouselContainer>
      <StyledSlider {...settings} ref={slider}>
        <CarouselItem
          image="https://i.pinimg.com/736x/fd/e0/56/fde0561bdce2da3b04c859d8071bafb3.jpg"
          label="1"
        />
        <CarouselItem
          image="https://i.pinimg.com/736x/fd/e0/56/fde0561bdce2da3b04c859d8071bafb3.jpg"
          label="2"
        />
        <CarouselItem
          image="https://i.pinimg.com/736x/fd/e0/56/fde0561bdce2da3b04c859d8071bafb3.jpg"
          label="3"
        />
        <CarouselItem
          image="https://i.pinimg.com/736x/fd/e0/56/fde0561bdce2da3b04c859d8071bafb3.jpg"
          label="4"
        />
        <CarouselItem
          image="https://i.pinimg.com/736x/fd/e0/56/fde0561bdce2da3b04c859d8071bafb3.jpg"
          label="5"
        />
        <CarouselItem
          image="https://i.pinimg.com/736x/fd/e0/56/fde0561bdce2da3b04c859d8071bafb3.jpg"
          label="6"
        />
        <CarouselItem
          image="https://i.pinimg.com/736x/fd/e0/56/fde0561bdce2da3b04c859d8071bafb3.jpg"
          label="7"
        />
      </StyledSlider>
      <Controls>
        <Arrow direction="left" onClick={prev} />
        <ul className="slick-dots" style={{ background: 'red' }}>
          a
        </ul>
        <Arrow direction="right" onClick={next} />
      </Controls>
    </CarouselContainer>
  );
};

Carousel.Item = CarouselItem;

export default Carousel;
