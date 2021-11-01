import React from 'react';

import { Description, Title, Wrapper } from './styles';

const InfoIcon = () => (
  <svg width="1rem" height="1rem" focusable="false" aria-hidden="true">
    <path
      fill="currentColor"
      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
    />
  </svg>
);

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
  info,
  line = true
}: ContentHeadingProps) => (
  <Wrapper>
    <Title>
      {title}

      {info && <InfoIcon />}
    </Title>

    {description && <Description line={line}>{description}</Description>}
  </Wrapper>
);
