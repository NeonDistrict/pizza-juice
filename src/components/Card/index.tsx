import React from 'react';
import SelectLayout from './SelectLayout';
import { StyledCard } from './styles';

interface CardProps {
  layout?: 'A' | 'B' | 'C' | 'D';
  image?: string;
  title?: string;
  subtitle?: string;
  images?: string[];
}

export const Card = ({
  layout = 'A',
  image,
  title,
  subtitle,
  images
}: CardProps) => (
  <StyledCard
    // className={`layout-${layout}`}
  >
    <SelectLayout
      layout={layout}
      image={image}
      title={title}
      subtitle={subtitle}
      images={images}
    />
  </StyledCard>
);
