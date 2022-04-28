import React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { Flex } from '.';

export default {
  title: 'Components/Layout/Flex',
  component: Flex,
} as Meta;

export const Default = () => <Flex bg="green-900" css={{ size: 50 }} />;
