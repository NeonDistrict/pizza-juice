import React from 'react';

import { useMediaQuery } from '@neon-district/hooks';

import { Button } from '@neon-district/button';

import {
  Wrapper,
  FullLine,
  Line,
  Description,
  HeadingStyled,
  FlexEnd,
  Bottom,
  Title
} from './styles';

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

export const PageHeading = ({
  description,
  children,
  title,
  ...args
}: PageHeadingProps) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Wrapper {...args}>
      <HeadingStyled>
        <Title haveButton={!!children}>{title}</Title>
        <Line haveButton={!!children} haveDescription={!!description} />
        <FlexEnd>
          {!isMobile && (
            <ChildrenButtons children={children} isMobile={isMobile} />
          )}
        </FlexEnd>
      </HeadingStyled>
      <FullLine haveButton={!!children} haveDescription={!!description} />
      <Bottom>
        {description && <Description>{description}</Description>}
        {isMobile && (
          <ChildrenButtons children={children} isMobile={isMobile} />
        )}
      </Bottom>
    </Wrapper>
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
          fluid: true
        });
      }

      return child;
    })}
  </>
);
