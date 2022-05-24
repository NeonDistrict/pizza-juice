import React, { HTMLAttributes } from 'react';

import { CSS, VariantProps } from '../../system';

import { forwardRef } from '../../utils';

import { CloseIcon } from './icon';

import * as S from './styles';

export type TagProps = {
  /**
   * Style variant
   * @default 'outlined'
   */
  variant?: VariantProps<typeof S.Wrapper>['variant'];
  /**
   * Show remove button
   * @default `false`
   */
  removable?: boolean;
  /**
   * @a11y
   * Label to display on close button
   */
  removableLabel?: string;
  /**
   * CSS properties
   */
  css?: CSS;
  /**
   * Tag content
   */
  children?: React.ReactNode;
  /**
   * Fires when click on `X`
   */
  onClose?: () => void;
} & HTMLAttributes<HTMLSpanElement>;

/**
 * Tag component
 *
 * @description used for items that need to be labeled, categorized, or organized using keywords that describe them.
 */
export const Tag = forwardRef<TagProps, 'span'>((props, ref) => {
  const { removable, removableLabel, children, onClose, ...rest } = props;

  if (!!removable && (!removableLabel || removableLabel === undefined)) {
    throw new Error('removableLabel is required when removable is true');
  }

  const handleClose = () => {
    !!onClose && onClose();
  };

  return (
    <S.Wrapper ref={ref} removable={removable} {...rest}>
      {children}

      {removable && (
        <S.RemovableWrapper aria-label={removableLabel} onClick={handleClose}>
          <CloseIcon />
        </S.RemovableWrapper>
      )}
    </S.Wrapper>
  );
});
