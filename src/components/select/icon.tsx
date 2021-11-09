import React, { HTMLAttributes } from 'react';

type ChevronDownIconProps = HTMLAttributes<HTMLOrSVGElement>;

export const ChevronDownIcon = ({ ...props }: ChevronDownIconProps) => (
  <svg
    viewBox="0 0 24 24"
    width="1.5rem"
    height="1.5rem"
    focusable="false"
    aria-hidden="true"
    fill="currentColor"
    {...props}
  >
    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
  </svg>
);
