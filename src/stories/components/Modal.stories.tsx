import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from '../../components/Modal';

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
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'CANCEL',
  subtitle: 'ARE YOU SURE?',
  showModal: true,
  children: <p>Your changes will be lost!</p>
};
