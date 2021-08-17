import React from 'react';
import SelectLayout from './SelectLayout';
import { StyledCard } from './styles';

interface CardProps {
  layout?: 'A' | 'B' | 'C' | 'D';
  title?: string;
  subtitle?: string;
  images?: string[];
}

export const Card = ({ layout = 'A', title, subtitle, images }: CardProps) => (
  <StyledCard>
    <SelectLayout
      layout={layout}
      title={title}
      subtitle={subtitle}
      images={images}
    />
  </StyledCard>
);
