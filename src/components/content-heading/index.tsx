import React from 'react';

import { InfoIcon } from './icon';

import * as S from './styles';

export type ContentHeadingProps = {
  /**
   *
   */
  title?: string;
  /**
   *
   */
  description?: string;
  /**
   *
   * @default `false
   */
  info?: boolean;
  /**
   *
   * @default `true`
   */
  line?: boolean;
};

/**
 * ContentHeading component
 *
 * @description A component to display a title and description
 */
export const ContentHeading = ({
  title,
  description,
  line,
  info
}: ContentHeadingProps) => (
  <S.Wrapper>
    <S.Title>
      {title}

      {info && <InfoIcon />}
    </S.Title>

    {description && <S.Description line={line}>{description}</S.Description>}
  </S.Wrapper>
);
