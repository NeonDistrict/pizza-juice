import styled, { css } from 'styled-components';
import { ButtonProps } from './index';

const sizes = {
  medium: '0.65rem 2.5rem',
  large: '0.82rem 2.8rem'
};

export const ButtonStyles = styled.button<Pick <ButtonProps, 'buttonType' | 'size' | 'fullWidth' | 'disabled'>>`
  cursor: pointer;
  border: none;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  letter-spacing: ${p => p.size === 'large' ? '0.72px' : '0.48px'};
  font-size: ${p => p.size === 'large' && '1.35rem'};
  padding: ${p => sizes[p.size || 'medium']};
  width: ${p => p.fullWidth && '100%'};

  :disabled {
    opacity: 0.8 !important;
    cursor: not-allowed;
  }

  ${p =>
    p.buttonType === 'primary' &&
    css`
      background-color: ${p => p.theme.darkPink};
    `}

  ${p =>
    p.buttonType === 'basic' &&
    css`
      background-color: transparent;
      border: 2px solid ${p => p.theme.darkPink};
    `}

  ${p =>
    p.buttonType === 'standard' &&
    css`
      background-color: ${p => p.theme.lightGrey};
    `}

  ${p =>
    p.buttonType === 'secondary' &&
    css`
      background-color: ${p => p.theme.darkGrey};
    `}

  ${p =>
    p.buttonType === 'negative' &&
    css`
      background-color: #331319;
      border: 1px solid ${p => p.theme.lightRed};
      color: ${p => p.theme.lightRed};
    `}

  ${p =>
    p.buttonType === 'negative-basic' &&
    css`
      background-color: transparent;
      border: 1px solid ${p => p.theme.lightRed};
      color: ${p => p.theme.lightRed};
    `}

  ${p =>
    p.buttonType === 'positive' &&
    css`
      background-color: #1c2617;
      border: 1px solid ${p => p.theme.lightGreen};
      color: ${p => p.theme.lightGreen};
    `}

  ${p =>
    p.buttonType === 'positive-basic' &&
    css`
      background-color: transparent;
      border: 1px solid ${p => p.theme.lightGreen};
      color: ${p => p.theme.lightGreen};
    `}
`;
