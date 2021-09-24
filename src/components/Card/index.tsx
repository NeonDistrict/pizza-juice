import React from 'react';
import SelectLayout from './SelectLayout';
import { Main } from './styles';

export type CardProps = {
  layout?: 'A' | 'B' | 'C' | 'D';
  title?: string;
  subtitle?: string;
  images?: string[];
};

const Card = ({ layout = 'A', title, subtitle, images }: CardProps) => (
  <Main>
    <SelectLayout
      layout={layout}
      title={title}
      subtitle={subtitle}
      images={images}
    />
  </Main>
);

export default Card;
