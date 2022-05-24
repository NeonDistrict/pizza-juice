import React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { Col } from '.';

import { Row } from '../row';

export default {
  title: 'Components/Layout/Col',
  component: Col,
} as Meta;

export const Default = () => (
  <Row>
    <Col col={{ '@initial': 12, '@sm': 2, '@md': 4 }} css={{ bg: '$pink-500' }}>
      &nbsp;
    </Col>

    <Col
      col={{ '@initial': 12, '@sm': 2, '@md': 4 }}
      css={{ bg: '$yellow-500' }}
    >
      &nbsp;
    </Col>

    <Col col={{ '@initial': 12, '@sm': 2, '@md': 4 }} css={{ bg: '$red-500' }}>
      &nbsp;
    </Col>

    <Col col={{ '@initial': 12, '@sm': 2, '@md': 4 }} css={{ bg: '$teal-500' }}>
      &nbsp;
    </Col>

    <Col col={{ '@initial': 12, '@sm': 2, '@md': 4 }} css={{ bg: '$grey-700' }}>
      &nbsp;
    </Col>
    <Col
      col={{ '@initial': 12, '@sm': 2, '@md': 4 }}
      css={{ bg: '$green-500' }}
    >
      &nbsp;
    </Col>
  </Row>
);
