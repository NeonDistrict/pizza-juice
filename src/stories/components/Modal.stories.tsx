import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from '../../components/Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'CANCEL',
  subtitle: 'ARE YOU SURE?',
  description: 'ALL YOUR CHANGES WILL BE LOST'
}