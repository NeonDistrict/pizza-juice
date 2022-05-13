import React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { Stack } from '../components/stack';

import {
  InfoSolid,
  InfoOutline,
  FlagSolid,
  Close,
  CloseSolid,
  CheckSolid,
} from '.';

export default {
  title: 'Icons',
  argTypes: {
    size: {
      control: { type: 'number' },
    },
    color: {
      options: [
        '$white',
        '$pink-500',
        '$red-500',
        '$yellow-500',
        '$success-500',
      ],
      control: { type: 'select' },
    },
  },
} as Meta;

type IconArgs = {
  size?: number;
  color?: string;
};

export const Default = (args: IconArgs) => {
  console.log(args.size);

  return (
    <Stack>
      <Stack align="center" justify="center" direction="column" gap={1}>
        <InfoSolid css={args} />

        <p>InfoSolid</p>
      </Stack>

      <Stack align="center" justify="center" direction="column" gap={1}>
        <InfoOutline css={args} />
        <p>InfoOutline</p>
      </Stack>

      <Stack align="center" justify="center" direction="column" gap={1}>
        <FlagSolid css={args} />
        <p>FlagSolid</p>
      </Stack>

      <Stack align="center" justify="center" direction="column" gap={1}>
        <Close css={args} />
        <p>Close</p>
      </Stack>

      <Stack align="center" justify="center" direction="column" gap={1}>
        <CloseSolid css={args} />
        <p>CloseSolid</p>
      </Stack>

      <Stack align="center" justify="center" direction="column" gap={1}>
        <CheckSolid css={args} />
        <p>CheckSolid</p>
      </Stack>
    </Stack>
  );
};

Default.args = {
  size: 30,
  color: '$white',
};
