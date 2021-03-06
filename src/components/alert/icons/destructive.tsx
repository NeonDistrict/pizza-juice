import React from 'react';
import { HTMLAttributes } from 'react';

type DestructiveIconProps = HTMLAttributes<HTMLOrSVGElement>;

export const DestructiveIcon = ({ ...props }: DestructiveIconProps) => (
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
      d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"
      fill="currentColor"
    />
  </svg>
);
