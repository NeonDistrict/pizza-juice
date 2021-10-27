import React from 'react';

type CreateIconProps = {
  /**
   * The icon `svg` viewBox
   * @default "0 0 24 24"
   */
  viewBox?: string;
  /**
   * If the has a single path, simply copy the path's `d` attribute
   */
  d?: string;
  /**
   * The `svg` path or group element
   * @type React.ReactElement | React.ReactElement[]
   */
  path?: React.ReactElement | React.ReactElement[];
};

export const createIcon = ({
  viewBox = '0 0 24 24',
  path,
  d: pathDefinition
}: CreateIconProps) => {
  const defaultProps = {
    width: '1em',
    height: '1em',
    display: 'inline-block',
    lineHeight: '1em',
    flexShrink: 0
  };

  const Comp = () => (
    <svg viewBox={viewBox} {...defaultProps}>
      {path ?? <path fill="currentColor" d={pathDefinition} />}
    </svg>
  );

  return Comp;
};
