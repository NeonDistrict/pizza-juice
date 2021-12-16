import React from 'react';
import { HTMLAttributes } from 'react';

type CloseIconProps = HTMLAttributes<HTMLOrSVGElement>;

export const CloseIcon = ({ ...props }: CloseIconProps) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.7267 3.33333L8.00001 7.06L4.27334 3.33333L3.33334 4.27333L7.06001 8L3.33334 11.7267L4.27334 12.6667L8.00001 8.93999L11.7267 12.6667L12.6667 11.7267L8.94001 8L12.6667 4.27333L11.7267 3.33333Z"
      fill="currentColor"
    />
  </svg>
);
