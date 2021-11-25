import React, { HTMLAttributes } from 'react';

import { CSS } from '../../system';

import { InfoIcon } from './icon';

import * as S from './styles';

export type ContentHeadingProps = {
  /**
   * Title of the heading
   */
  title?: string;
  /**
   * Description of the heading
   */
  description?: string;
  /**
   * Show info icon
   *
   * @default `false`
   */
  info?: boolean;
  /**
   * Show divider line
   *
   * @default `true`
   */
  line?: boolean;
  /**
   *
   * CSS properties
   */
  css?: CSS;
} & HTMLAttributes<HTMLDivElement>;

/**
 * ContentHeading component
 *
 * @description A component to display a title and description
 */
export const ContentHeading = ({
  title,
  description,
  line,
  info,
  ...props
}: ContentHeadingProps) => (
  <S.Wrapper {...props}>
    <S.Title>
      {title}

      {info && <InfoIcon />}
    </S.Title>

    {description && <S.Description line={line}>{description}</S.Description>}
  </S.Wrapper>
);
