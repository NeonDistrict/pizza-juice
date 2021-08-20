import styled, { css } from 'styled-components';
import { ButtonProps } from './index';

const sizes = {
  medium: '0.9rem 2.5rem',
  large: '1rem 3rem'
};

export const ButtonStyles = styled.button<ButtonProps>`
  cursor: pointer;
  border: none;
  font-weight: 600;
  text-transform: uppercase;
  color: white;

  font-size: ${p => p.size === 'large' && '1.3rem'};
  padding: ${p => sizes[p.size]};
  width: ${p => p.fullWidth && '100%'};

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
