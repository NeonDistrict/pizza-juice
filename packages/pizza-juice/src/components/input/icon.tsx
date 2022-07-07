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
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      d="M3,3 L21,21 M3,21 L21,3"
    />
  </svg>
);
