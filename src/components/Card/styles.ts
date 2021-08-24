import styled, { css } from 'styled-components';

export const Image = styled.img`
  object-fit: contain;
  height: 100%;
`;

export const Info = styled.div`
  margin: auto 0;
  width: 100%;
  padding-right: 0.9rem;
`;

export const ButtonWrapper = styled.div``;

export const Main = styled.div`
  background: black;
  text-transform: uppercase;
  width: 100%;
`;

export const Divider = styled.hr``;

export const Title = styled.h1``;

export const Subtitle = styled.h2``;

export const ItemContainer = styled.div``;

export const ImageRow = styled.div`
  gap: 1rem;
  display: flex;
  height: inherit;
`;

export const Container = styled.div<{ layout: string }>`
  ${p =>
    p.layout === 'A' &&
    css`
      display: flex;
      text-transform: uppercase;
      padding: 1.7rem;
      width: 400px;
      height: 200px;
      border: 1px solid ${p => p.theme.white};

      ${Image} {
        width: 116px;
        height: 144px;
        margin-right: 2rem;
      }

      ${Divider} {
        border: 1px solid ${p => p.theme.mediumGray};
        margin: 0.4rem 0;
      }

      ${Title} {
        color: ${p => p.theme.lightPink};
        font-size: 1.25rem; // 20px
        font-weight: bold;
        margin: 0;
      }

      ${Subtitle} {
        color: ${p => p.theme.white};
        font-size: 1.15rem; // 18px
        font-weight: 300;
        margin: 0;
      }
    `}

  ${p =>
    p.layout === 'B' &&
    css`
      border: 1px solid ${p => p.theme.grey};
      padding: 0.75rem 1.1rem;
      width: 168px;
      height: 168px;

      display: flex;
      flex-direction: column;
      justify-content: center;

      ${Image} {
        width: 126px;
        height: 112px;
        margin: 0 auto;
      }
    `}

    ${p =>
    p.layout === 'C' &&
    css`
      border: 1px solid ${p => p.theme.grey};
      padding: 0 2.4rem;
      width: 100%;
      height: 140px;

      display: grid;
      grid-template-columns: 3fr 5fr 1fr;

      ${ButtonWrapper} {
        margin: auto;
      }

      ${Divider} {
        border: 1px solid ${p => p.theme.white};
        margin: 0.7rem 0;
        padding-right: 3rem;
      }

      ${Title} {
        color: ${p => p.theme.white};
        font-size: 1.25rem; // 20px
        font-weight: bold;
        letter-spacing: 2px;
        margin: 0;
      }

      ${Subtitle} {
        color: ${p => p.theme.mediumGray};
        font-size: 1rem;
        font-weight: 300;
        margin: 0;
      }

      @media screen and (max-width: 1024px) {
        gap: 2rem;
        display: flex;
        height: auto;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        padding: 2.4rem;

        ${ImageRow} {
          gap: 1rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }
      }
    `}

    ${p =>
    p.layout === 'D' &&
    css`
      border: 1px solid ${p => p.theme.grey};
      padding: 2.5rem;
      width: 400px;
      height: auto;
      text-align: center;

      ${Image} {
        width: 180px;
        height: 196px;
        margin: 0 auto;
      }

      ${Divider} {
        border: 1px solid ${p => p.theme.darkGrey};
        margin: 0.7rem 0;
        margin-bottom: 5rem;
      }

      ${Title} {
        color: ${p => p.theme.white};
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 2rem;
      }

      ${Subtitle} {
        color: ${p => p.theme.mediumGray};
        font-size: 1.15rem;
        font-weight: 600;
        margin-top: 5rem;
        padding: 0 30px;
        line-height: 33px;
      }
    `}
`;
