import { Card } from 'semantic-ui-react';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  background: transparent !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  width: 100% !important;

  .layout-A {
    // okay semantic.. i hate us.
    :only-child {
      justify-content: center !important;
      text-transform: uppercase !important;
      padding: 1.7rem;
      width: 400px;
      height: 200px;
      border-radius: 0 !important;

      .divider {
        border: 1px solid ${p => p.theme.grey};
        margin: 0.7rem 0;
      }

      .title {
        color: ${p => p.theme.lightPink};
        font-size: 1.45rem;
        font-weight: bold;
      }

      .subtitle {
        color: ${p => p.theme.white};
        font-size: 1.3rem;
        font-weight: 300;
      }
      border-radius: 0 !important;
      border: 1px solid ${p => p.theme.white} !important;
    }
  }

  .layout-B {
    :only-child {
      border: 1px solid ${p => p.theme.grey} !important;
      border-radius: 0 !important;
      padding: 0.75rem 1.1rem;
      width: 180px;
      margin: 0 !important;

      img {
        margin: 0 auto !important;
      }
    }
  }

  .layout-C {
    :only-child {
      border: 1px solid ${p => p.theme.grey} !important;
      border-radius: 0 !important;
      padding: 0 3.5rem;
      width: 100% !important;
      min-height: 140px;
      text-transform: uppercase;

      .images-row {
        gap: 3rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }

      .divider {
        border: 1px solid ${p => p.theme.white};
        margin: 0.7rem 0;
      }

      .title {
        color: ${p => p.theme.white};
        font-size: 1.45rem;
        font-weight: bold;
        letter-spacing: 2px;
      }

      .subtitle {
        color: ${p => p.theme.lightGrey};
        font-size: 1.2rem;
        font-weight: 300;
      }

      @media screen and (max-width: 1024px) {
        .layout-C {
          padding: 3.5rem;
        }

        .button {
          margin-top: 3rem !important;
        }

        .images-row {
          justify-content: center;
        }
      }
    }
  }

  .layout-D {
    :only-child {
      border: 1px solid ${p => p.theme.grey};
      border-radius: 0 !important;
      padding: 2.5rem;
      width: 400px;
      height: auto;
      text-align: center !important;
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
  }
`;
