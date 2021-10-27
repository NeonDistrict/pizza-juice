import React from 'react';

import { useMediaQuery } from '@district-ui/hooks';

import Button from '@district-ui/button';

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
  title: string;
  description?: string;
  children?: React.ReactNode;
};

const ChildrenButtons = ({
  children,
  isMobile
}: {
  children: React.ReactNode;
  isMobile: boolean;
}) => (
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

const PageHeading = ({
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

export default PageHeading;
