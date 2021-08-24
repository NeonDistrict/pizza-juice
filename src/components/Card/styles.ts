import styled from 'styled-components';

export const Image = styled.img`
  object-fit: cover;
  /* width: 100%; */
  height: 100%;
  /* height: 100%; */
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

  .layout-A {
    display: flex;
    text-transform: uppercase;
    padding: 1.7rem;
    width: 400px;
    height: 200px;

    ${Image} {
      width: 116px;
      height: 144px;
      margin-right: 2rem;
    }

    .divider {
      border: 1px solid ${p => p.theme.mediumGray};
      margin: 0.4rem 0;
    }

    .title {
      color: ${p => p.theme.lightPink};
      font-size: 1.25rem; // 20px
      font-weight: bold;
      margin: 0;
    }

    .subtitle {
      color: ${p => p.theme.white};
      font-size: 1.15rem; // 18px
      font-weight: 300;
      margin: 0;
    }
    border: 1px solid ${p => p.theme.white};
  }

  .layout-B {
    border: 1px solid ${p => p.theme.grey};
    padding: 0.75rem 1.1rem;
    width: 168px;
    height: 168px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */

    ${Image} {
      width: 126px;
      height: 112px;
      margin: 0 auto;
    }
  }

  .layout-C {
    border: 1px solid ${p => p.theme.grey};
    padding: 0 2.4rem;
    width: 100%;
    height: 140px;

    display: grid;
    grid-template-columns: 3fr 5fr 1fr;

    /* ${Image} {
      width: 100%;
      height: 100%;
    } */

    .images-row {
      gap: 1rem;
      display: flex;
      height: inherit;
      /* flex-wrap: wrap; */
    }

    ${ButtonWrapper} {
      margin: auto;
    }

    .divider {
      border: 1px solid ${p => p.theme.white};
      margin: 0.7rem 0;
      padding-right: 3rem;
    }

    .title {
      color: ${p => p.theme.white};
      font-size: 1.25rem; // 20px
      font-weight: bold;
      letter-spacing: 2px;
      margin: 0;
    }

    .subtitle {
      color: ${p => p.theme.mediumGray};
      font-size: 1rem;
      font-weight: 300;
      margin: 0;
    }

    @media screen and (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;

      .images-row {
        gap: 1rem;
        display: flex;
        flex-wrap: wrap;
      }
    }
  }

  .layout-D {
    border: 1px solid ${p => p.theme.grey};
    padding: 2.5rem;
    width: 400px;
    height: auto;
    text-align: center;
    text-transform: uppercase;

    .divider {
      border: 1px solid ${p => p.theme.darkGrey};
      margin: 0.7rem 0;
      margin-bottom: 5rem;
    }

    .title {
      color: ${p => p.theme.white};
      font-size: 1.45rem;
      font-weight: bold;
      margin-bottom: 2rem;
    }

    .subtitle {
      color: ${p => p.theme.mediumGray};
      font-size: 1.3rem;
      font-weight: 300;
      margin-top: 5rem;
      padding: 0 30px;
    }
  }
`;
