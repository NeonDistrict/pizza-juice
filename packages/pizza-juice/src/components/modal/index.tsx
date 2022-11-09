import React, { HTMLAttributes } from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import { CSS } from '../../system';
import { cx, forwardRef } from '../../utils';

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
   * If `true`, create portal to render the modal
   *
   * @default true
   */
  portal?: boolean;
  /**
   * Callback fired when the overlay is clicked
   *
   */
  /**
   * The content of the modal.
   */
  children: React.ReactNode;
  onClickOverlay?: () => void;
  /**
   * Callback fired when the modal is closed
   */
  onClose: () => void;
  /**
   * Callback fired when ESC key is pressed
   */
  onEscapeKeyDown?: () => void;
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
    className,
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
    <Root onClose={onClose} {...rest}>
      <S.Overlay className="modal--overlay" />

      <S.Content
        ref={ref}
        className={cx('modal--content', className)}
        onInteractOutside={handleOverlayClick}
        onCloseAutoFocus={onClose}
        onEscapeKeyDown={handleEspaceKey}
        asChild
      >
        {children}
      </S.Content>
    </Root>
  );
});

type ModalTitleProps = {
  css?: CSS;
} & HTMLAttributes<HTMLHeadingElement>;

/**
 * An accessible name to be announced when the dialog is opened.
 */
export const ModalTitle = forwardRef<ModalTitleProps, 'h2'>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <Text
      ref={ref}
      as={DialogPrimitive.DialogTitle}
      className={cx('modal--title', className)}
      {...rest}
    >
      {children}
    </Text>
  );
});

type ModalDescriptionProps = {
  css?: CSS;
} & HTMLAttributes<HTMLParagraphElement>;

/**
 * An accessible description to be announced when the dialog is opened.
 */
export const ModalDescription = forwardRef<ModalDescriptionProps, 'p'>(
  (props, ref) => {
    const { className, children, ...rest } = props;

    return (
      <Text
        ref={ref}
        as={DialogPrimitive.DialogDescription}
        className={cx('modal--description', className)}
        {...rest}
      >
        {children}
      </Text>
    );
  },
);

/**
 * Wrapper component to choose portal or not
 */
export const Root = (props: ModalProps) => {
  const { portal = true, children, ...rest } = props;

  if (portal) {
    return (
      <DialogPrimitive.Root {...rest}>
        <DialogPrimitive.Portal>{children}</DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    );
  }

  return <DialogPrimitive.Root {...rest}>{children}</DialogPrimitive.Root>;
};
