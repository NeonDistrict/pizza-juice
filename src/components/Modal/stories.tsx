import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Modal, { ModalProps } from '.';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    showModal: {
      control: { type: 'boolean' }
    },
    children: {
      table: { disable: true }
    },
    setShowModal: {
      table: { disable: true }
    },
    confirmFunction: {
      table: { disable: true }
    }
  }
} as Meta;

export const Default: Story<ModalProps> = args => <Modal {...args} />;

Default.args = {
  title: 'CANCEL',
  subtitle: 'ARE YOU SURE?',
  showModal: true,
  children: <p>Your changes will be lost!</p>
};
