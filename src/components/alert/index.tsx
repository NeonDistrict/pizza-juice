import React from 'react';

import { VariantProps } from '../../system';

import { Box } from '../box';

import * as S from './styles';

export type AlertProps = {
  /**
   * Title of the alert
   */
  title?: string;
  /**
   * Message of the alert
   */
  message?: string;
  /**
   * Variant style of the alert
   * @default "solid"
   */
  variant?: VariantProps<typeof S.Wrapper>['variant'];
  /**
   * It adds a color to the alert
   * @default "default"
   */
  type?: VariantProps<typeof S.Wrapper>['type'];
  /**
   * Action button of the alert
   */
  button?: React.ReactNode;
};

/**
 * Alert component
 *
 * @description used to communicate a state that affects a system, feature or page.
 */
export const Alert = ({ title, message, button, ...props }: AlertProps) => {
  return (
    <S.Wrapper {...props}>
      <Box
        css={{
          d: 'flex',
          align: 'center'
        }}
      >
        <Box>
          <S.TextStyled>{title}</S.TextStyled>

          <S.TextStyled>{message}</S.TextStyled>
        </Box>
      </Box>

      {button}
    </S.Wrapper>
  );
};
