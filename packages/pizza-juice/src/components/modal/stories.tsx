import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Modal, ModalTitle, ModalDescription, ModalProps } from '.';

import { Box } from '../box';
import { Flex } from '../flex';
import { Button } from '../button';

import { useDisclosure } from '../../hooks';

export default {
  title: 'Components/Overlay/Modal',
  component: Modal,
  argTypes: {
    ref: {
      table: { disable: true },
    },
    as: {
      table: { disable: true },
    },
    trigger: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
    open: {
      table: { disable: true },
    },
    closeOnOverlayClick: {
      control: { type: 'boolean' },
    },
    onClickOverlay: {
      action: 'Overlay Clicked',
      table: { disable: true },
    },
    onClose: {
      action: 'Modal closed',
      table: { disable: true },
    },
    onEscapeKeyDown: {
      action: 'ESC pressed',
      table: { disable: true },
    },
  },
} as Meta;

export const Default: Story<ModalProps> = (args) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open</Button>

      <Modal {...args} open={isOpen} onClose={onClose}>
        <Box css={{ color: '$white', bg: '$grey-900', w: 300, p: '$5' }}>
          <ModalTitle size="xl" weight="bold">
            Modal Title
          </ModalTitle>

          <ModalDescription css={{ mt: '$5' }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
            assumenda repellendus alias officia temporibus itaque rem, neque
            laudantium eligendi sapiente repudiandae quae, sequi vel modi culpa
            voluptatem quibusdam fugiat. Laboriosam.
          </ModalDescription>

          <Flex justify="end" css={{ mt: '$5' }}>
            <Button onClick={onClose}>Close</Button>
          </Flex>
        </Box>
      </Modal>
    </>
  );
};

Default.args = {
  closeOnOverlayClick: false,
  closeOnEsc: true,
  portal: true,
};
