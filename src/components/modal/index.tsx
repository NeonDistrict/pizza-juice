import React from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import { forwardRef } from '../../utils/forwardRef';

import * as S from './styles';

export type ModalProps = {
  /**
   * Element to open the modal.
   */
  trigger?: React.ReactNode;
  /**
   * The content of the modal.
   */
  children: React.ReactNode;
} & DialogPrimitive.DialogProps;

/**
 * Modal component
 *
 * @description A dialog is a window overlaid on either the primary window or another dialog window.
 *
 * Made with Radix, @see https://www.radix-ui.com/docs/primitives/components/dialog
 */
export const Modal = forwardRef<ModalProps, 'div'>((props, ref) => {
  const { trigger, children, ...rest } = props;

  return (
    <DialogPrimitive.Root {...rest}>
      {trigger && (
        <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      )}
      <DialogPrimitive.Portal>
        <S.Overlay />

        <S.Content ref={ref}>
          <DialogPrimitive.Close asChild>
            <S.IconButton>&times;</S.IconButton>
          </DialogPrimitive.Close>

          {children}
        </S.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
});
