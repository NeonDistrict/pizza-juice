import React, { HTMLAttributes } from 'react';

import { CSS } from '../../system';

import { InlineResourceBar } from './inline';
import { NormalResourceBar } from './normal';

export type ResourceBarProps = {
  /**
   * Neon value
   *
   * @default '0'
   */
  neon?: number;
  /**
   * Juice value
   *
   * @default '0'
   */
  juice?: number;
  /**
   * Parts value
   *
   * @default '0'
   */
  parts?: number;
  /**
   * Show text
   *
   * @default 'true'
   */
  hasText?: boolean;
  /**
   * Show text
   *
   * @default 'false'
   */
  inline?: boolean;
  /**
   * CSS properties
   */
  css?: CSS;
} & HTMLAttributes<HTMLDivElement>;

export const ResourceBar = ({ inline, ...props }: ResourceBarProps) => {
  return (
    <>
      {inline ? (
        <InlineResourceBar {...props} />
      ) : (
        <NormalResourceBar {...props} />
      )}
    </>
  );
};
