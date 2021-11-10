import React, { HTMLAttributes } from 'react';

type ChevronDownIconProps = HTMLAttributes<HTMLOrSVGElement>;

export const ChevronDownIcon = ({ ...props }: ChevronDownIconProps) => (
  <svg
    viewBox="0 0 16 16"
    width="1.5rem"
    height="1.5rem"
    focusable="false"
    aria-hidden="true"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
    ></path>
  </svg>
);
