import styled, { css } from 'styled-components';

export const Image = styled.img`
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
  height: 100%;
`;

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: ${p => p.theme.mediumGray};
`;

export const Title = styled.h1``;

export const Subtitle = styled.h2``;

export const ItemContainer = styled.div``;

export const ImageRow = styled.div`
  gap: 1rem;
  display: flex;
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
        height: 1px;
        margin: 0.5rem 0;
      }

      ${Title} {
        color: ${p => p.theme.lightPink};
        font-size: 1.25rem; // 20px
        letter-spacing: 0.6px;
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
      height: 100%;

      display: grid;
      grid-template-columns: 3fr 5fr 1fr;

      ${ButtonWrapper} {
        margin: auto;
      }

      ${Divider} {
        height: 2px;
        background-color: ${p => p.theme.white};
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

      ${ImageRow} {
        ${Image} {
          height: 140px;
        }
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
      padding: 40px 30px 25px 30px;
      width: 395px;
      height: 569px;
      text-align: center;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      ${Image} {
        width: 152px;
        height: 189px;
        margin: 0 auto;
      }

      ${Divider} {
        height: 2px;
        margin: 0;
        background: ${p => p.theme.darkGrey};
      }

      ${Title} {
        color: ${p => p.theme.white};
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
      }

      ${Subtitle} {
        margin: 0;
        color: ${p => p.theme.mediumGray};
        font-size: 1.15rem;
        font-weight: 600;
        padding: 0 30px;
        line-height: 33px;
      }
    `}
`;
