import styled, { css } from 'styled-components';
import Slider from 'react-slick';

export const ItemContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 124px;
    height: 124px;
    padding: 2rem;
    border: 1px solid ${theme.colors.white};
  `}
`;

export const ItemImage = styled.img`
  height: 112px;
  width: 150px;
  object-fit: contain;
`;

export const Overlay = styled.div`
  position: relative;
  bottom: 23px;
`;

export const ArrowContainer = styled.div`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
    color: ${theme.colors.grey[100]};
    background: ${theme.colors.grey[400]};
    border-radius: ${theme.radii.full};

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    transition: ${theme.durations.fast};

    &:hover {
      background: ${theme.colors.grey[300]};
    }
  `}
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledSlider = styled(Slider)`
  .slick-arrow {
    display: none !important;
  }
  .slick-dots {
    /* display: none !important; */
    background: red;
  }
`;
export const CarouselContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${theme.spaces[4]};
  `}
`;
