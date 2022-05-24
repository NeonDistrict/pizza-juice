import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Pagination, PaginationProps } from '.';

export default {
  title: 'Components/Data Display/Pagination',
  component: Pagination,
} as Meta;

export const Default: Story<PaginationProps> = (args) => (
  <Pagination {...args} />
);

Default.args = {
  total: 335,
  page: 1,
  pageSize: 10,
};

export const WithJumpButtons: Story<PaginationProps> = (args) => (
  <Pagination {...args} />
);

WithJumpButtons.args = {
  total: 335,
  page: 1,
  pageSize: 10,
  quickJump: true,
};
