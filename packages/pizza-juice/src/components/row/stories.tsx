import React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { Row } from '.';

import { Col } from '../col';
import { Box } from '../box';

export default {
  title: 'Components/Layout/Row',
  component: Row,
} as Meta;

export const Default = () => (
  <Row gutterX={5} gutterY={2}>
    <Col col={{ '@initial': 12, '@md': 6, '@xl': 12 }}>
      <Box css={{ w: '$full', bg: '$pink-500' }}> &nbsp;</Box>
    </Col>

    <Col col={{ '@initial': 12, '@md': 6, '@xl': 12 }}>
      <Box css={{ w: '$full', bg: '$yellow-500' }}> &nbsp;</Box>
    </Col>
  </Row>
);
