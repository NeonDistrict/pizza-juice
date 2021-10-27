import styled, { css } from '@neon-district/system';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-list {
      margin: 0 -${theme.spaces[4]};
    }

    .slick-prev {
      left: -${theme.spaces[4]};
    }

    .slick-next {
      right: -${theme.spaces[4]};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }

    .slick-prev,
    .slick-next {
      bottom: -17px;
    }

    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spaces[8]};

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 8px;
        height: 8px;
        margin: 0 ${theme.spaces[1]};
        background: ${theme.colors.pink1};
        border-radius: ${theme.radii.full};
        cursor: pointer;
        transition: box-shadow ${theme.durations.fast};

        &.slick-active {
          background: ${theme.colors.pink1};
        }
      }

      button {
        opacity: 0;
        width: 8px;
        height: 8px;
        cursor: pointer;
      }
    }
  `}
`;

export const Item = styled.article`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    margin: 0 ${theme.spaces[4]};
    flex: 1 0 auto;
    height: 190px;
    border: 1px solid ${theme.colors.white};
    padding: ${theme.spaces[8]};
    justify-content: center;

    button {
      position: absolute;
      bottom: 50px;
      text-transform: uppercase;
    }

    img {
      width: 100%;
      height: 100%;
      background-size: cover;
      object-fit: cover;
    }
  `}
`;
