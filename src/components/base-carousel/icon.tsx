import React from 'react';

import { styled } from '../../system';

export const Arrow = styled('button', {
  position: 'absolute',
  width: 40,
  h: 40,
  mx: '$4',
  p: 0,
  d: 'flex',
  justify: 'center',
  items: 'center',
  bg: '$grey4',
  color: '$white',
  border: 'none',
  br: '$full',
  cursor: 'pointer',
  transition: '$fast',

  '&:hover': {
    bg: '$grey3'
  }
});

type BaseIconProps = {
  d?: string;
};

const BaseIcon = ({ d }: BaseIconProps) => (
  <svg width="1rem" height="1rem" focusable="false" aria-hidden="true">
    <path fill="currentColor" d={d} />
  </svg>
);

export const PrevArrow = ({ ...props }) => (
  <Arrow {...props}>
    <BaseIcon d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
  </Arrow>
);

export const NextArrow = ({ ...props }) => (
  <Arrow {...props}>
    <BaseIcon d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
  </Arrow>
);
