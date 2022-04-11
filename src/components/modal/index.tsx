import React, { HTMLAttributes } from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import { CSS } from '../../system';

import { forwardRef } from '../../utils';

import { Text } from '../text';

import * as S from './styles';

export type ModalProps = {
  /**
   * Control the visibility of the modal
   */
  open: boolean;
  /**
   * If `true`, the modal will close when the overlay is clicked
   *
   * @default false
   */
  closeOnOverlayClick?: boolean;
  /**
   * If `true`, the modal will close when ESC key is pressed
   *
   * @default true
   */
  closeOnEsc?: boolean;
  /**
   * Callback fired when the overlay is clicked
   *
   */
  onClickOverlay?: () => void;
  /**
   * Callback fired when the modal is closed
   *
   */
  onClose: () => void;
  /**
   * Callback fired when ESC key is pressed
   */
  onEscapeKeyDown?: () => void;
  /**
   * The content of the modal.
   */
  children: React.ReactNode;
};

/**
 * Modal component
 *
 * @description A modal is a window overlaid on either the primary window.
 *
 * Made with Radix, @see https://www.radix-ui.com/docs/primitives/components/dialog
 */
export const Modal = forwardRef<ModalProps, 'div'>((props, ref) => {
  const {
    children,
    closeOnOverlayClick,
    closeOnEsc,
    onClickOverlay,
    onClose,
    onEscapeKeyDown,
    ...rest
  } = props;

  const handleOverlayClick = () => {
    closeOnOverlayClick && onClose();

    !!onClickOverlay && onClickOverlay();
  };

  const handleEspaceKey = () => {
    closeOnEsc && onClose();

    !!onEscapeKeyDown && onEscapeKeyDown();
  };

  return (
    <DialogPrimitive.Root {...rest}>
      <DialogPrimitive.Portal>
        <S.Overlay />

        <S.Content
          ref={ref}
          onInteractOutside={handleOverlayClick}
          onCloseAutoFocus={onClose}
          onEscapeKeyDown={handleEspaceKey}
          asChild
        >
          {children}
        </S.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
});

type ModalTitleProps = {
  children: React.ReactNode;
  css?: CSS;
} & HTMLAttributes<HTMLHeadingElement>;

/**
 * An accessible name to be announced when the dialog is opened.
 */
export const ModalTitle = forwardRef<ModalTitleProps, 'h2'>((props, ref) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, color, ...rest } = props;

  return (
    <Text ref={ref} as={DialogPrimitive.DialogTitle} {...rest}>
      {children}
    </Text>
  );
});

type ModalDescriptionProps = {
  children: React.ReactNode;
  css?: CSS;
} & HTMLAttributes<HTMLParagraphElement>;

/**
 * An accessible description to be announced when the dialog is opened.
 */
export const ModalDescription = forwardRef<ModalDescriptionProps, 'p'>(
  (props, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { children, color, ...rest } = props;

    return (
      <Text ref={ref} as={DialogPrimitive.DialogDescription} {...rest}>
        {children}
      </Text>
    );
  },
);
