/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-children-prop */

import React from 'react';

import { useMediaQuery } from '../../hooks';

import { Button } from '../button';

import * as S from './styles';

export type PageHeadingProps = {
  /**
   *
   */
  title: string;
  /**
   *
   */
  description?: string;
  /**
   *
   */
  children?: React.ReactNode;
};

/**
 * PageHeading component
 *
 * @description Headings are used for rendering headlines.
 */
export const PageHeading = ({
  description,
  children,
  title,
  ...args
}: PageHeadingProps) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <S.Wrapper {...args}>
      <S.HeadingStyled>
        <S.Title haveButton={!!children}>{title}</S.Title>

        <S.Line haveButton={!!children} haveDescription={!!description} />

        {!isMobile && (
          <S.FlexEnd>
            <ChildrenButtons children={children} isMobile={isMobile} />
          </S.FlexEnd>
        )}
      </S.HeadingStyled>

      <S.FullLine haveButton={!!children} haveDescription={!!description} />

      <S.Bottom haveButton={!!children} haveDescription={!!description}>
        {description && <S.Description>{description}</S.Description>}

        {isMobile && (
          <ChildrenButtons children={children} isMobile={isMobile} />
        )}
      </S.Bottom>
    </S.Wrapper>
  );
};

type ChildrenButtonsProps = {
  children: React.ReactNode;
  isMobile: boolean;
};

const ChildrenButtons = ({ children, isMobile }: ChildrenButtonsProps) => (
  <>
    {React.Children.map(children, (child: any) => {
      if (child?.type === Button && isMobile) {
        return React.cloneElement(child, {
          fluid: true,
        });
      }

      return child;
    })}
  </>
);
