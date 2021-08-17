import { Modal } from 'semantic-ui-react';
import styled from 'styled-components';

export const StyledModal = styled(Modal)`

  width: 30vw !important;
  background-color: transparent !important;
  border: 0 !important;
  border-radius: none !important;
  text-transform: uppercase !important;

  @media (min-width: 1024px) {
    .ui.modal {
      width: 25vw !important;
    }
  }

  .modal-container {
    padding: 4rem;
  }

  .header {
    text-transform: uppercase !important;
    background-color: transparent;
    color: ${p => p.theme.white};
    display: flex !important;
    flex-direction: column;
    justify-content: center !important;
    align-items: center !important;
    border: 0 !important;
    font-weight: 600;
  }

  hr.modal-divider {
    color: ${p => p.theme.lightRed} !important;
    width: 100%;
    border: 1px solid;
  }

  .modal-actions {
    display: flex;
    gap: 1rem;
  }

  .ui.header.modal-title {
    background-color: transparent;
    color: ${p => p.theme.lightRed};
    font-size: 2rem;
    margin-bottom: 0.5rem;
    letter-spacing: 0.2rem;
  }

  .content {
    margin: 6rem 0;
  }

  .description {
    width: 100%;
    border-left: 2px solid ${p => p.theme.lightRed} !important;
  }

  .modal-paragraph {
    font-weight: 400;
    letter-spacing: 0.1rem;
    margin: 3rem 0;
  }

  .ui.header.modal-subtitle {
    margin-top: 0.5rem;
    background-color: transparent;
    color: ${p => p.theme.lightRed};
    font-size: 1.375rem;
  }

  .content {
    display: flex;
    display: flex !important;
    flex-direction: column;
    justify-content: center !important;
    align-items: center !important;
    background-color: transparent;
  }

  .actions {
    border: 0;
    background-color: transparent;
    margin-top: 1rem;
  }

  .ui.modal .actions > .button {
    margin-left: 0 !important;
  }
`;
