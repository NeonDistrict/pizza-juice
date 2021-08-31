import React from 'react';
import SelectLayout from './SelectLayout';
import { Main } from './styles';

export interface CardProps {
  layout?: 'A' | 'B' | 'C' | 'D';
  title?: string;
  subtitle?: string;
  images?: string[];
}

export const Card = ({ layout = 'A', title, subtitle, images }: CardProps) => (
  <Main>
    <SelectLayout
      layout={layout}
      title={title}
      subtitle={subtitle}
      images={images}
    />
  </Main>
);
