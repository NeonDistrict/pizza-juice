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
  /**
   * Default props automatically passed to the component; overwriteable
   */
  defaultProps?: React.SVGAttributes<SVGElement>;
};

export const createIcon = ({
  viewBox = '0 0 24 24',
  path,
  d: pathDefinition,
  defaultProps
}: CreateIconProps) => {
  const defaults = {
    width: '1em',
    height: '1em',
    ...defaultProps
  };

  const Comp = () => (
    <svg viewBox={viewBox} {...defaults}>
      {path ?? <path fill="currentColor" d={pathDefinition} />}
    </svg>
  );

  return Comp;
};
