import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Modal, ModalProps } from '.';

import { Box } from '../box';
import { Button } from '../button';

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
  },
} as Meta;

export const Default: Story<ModalProps> = (args) => (
  <Modal {...args} trigger={<Button>Open</Button>}>
    <Box css={{ color: '$white', bg: '$grey-900', size: 300, p: '$5' }} />
  </Modal>
);
