/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const BaseIcon = ({ d }: any) => (
  <svg
    viewBox="0 0 512 512"
    width="1rem"
    height="1rem"
    focusable="false"
    aria-hidden="true"
  >
    <path fill="currentColor" d={d} />
  </svg>
);

export const CloseIcon = () => (
  <BaseIcon d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
);
