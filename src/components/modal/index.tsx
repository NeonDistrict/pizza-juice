/* eslint-disable @typescript-eslint/no-empty-function */
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
   * If `true`, the modal will close when the overlay is clicked
   *
   * @default false
   */
  closeOnOverlayClick?: boolean;
  /**
   * Callback fired when the overlay is clicked
   *
   */
  onClickOverlay?: () => void;
  /**
   * Callback fired when the modal is closed
   *
   */
  onClose?: () => void;
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
  const {
    trigger,
    children,
    closeOnOverlayClick,
    onClickOverlay,
    onClose,
    ...rest
  } = props;

  const handleOverlayClick = (e: OverlayClickEvent) => {
    if (!closeOnOverlayClick) e.preventDefault();

    !!onClickOverlay && onClickOverlay();
  };

  const handleModalClose = () => {
    !!onClose && onClose();
  };

  return (
    <DialogPrimitive.Root {...rest}>
      {trigger && (
        <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      )}
      <DialogPrimitive.Portal>
        <S.Overlay />

        <S.Content
          ref={ref}
          onInteractOutside={handleOverlayClick}
          onCloseAutoFocus={handleModalClose}
        >
          <DialogPrimitive.Close asChild>
            <S.IconButton>&times;</S.IconButton>
          </DialogPrimitive.Close>

          {children}
        </S.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
});

// Type for onInteractOutside method
type OverlayClickEvent = CustomEvent<{
  originalEvent: PointerEvent | FocusEvent;
}>;
