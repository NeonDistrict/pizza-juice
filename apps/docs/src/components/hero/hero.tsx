import React from 'react';

import {
  Box,
  Button,
  Container,
  Flex,
  Stack,
  Text,
} from '@blockadegames/pizza-juice';

import { FiGithub } from 'react-icons/fi';

import Link from '@docusaurus/Link';

export const Hero = () => {
  return (
    <Flex
      as="section"
      direction="column"
      justify="center"
      align="center"
      css={{ py: '$20' }}
    >
      <Container css={{ maxWidth: 800, textAlign: 'center' }}>
        <Stack direction="column" gap={10}>
          <Text
            as="h1"
            weight="bold"
            css={{
              fontSize: '2rem',
              '@md': {
                fontSize: '4rem',
              },
            }}
          >
            Create accessible React apps{' '}
            <Text
              weight="bold"
              css={{
                d: 'inline',
                color: '$pink-500',
                fontSize: '2rem',
                '@md': {
                  fontSize: '4rem',
                },
              }}
            >
              with speed
            </Text>
          </Text>

          <Text as="p" size="xl" css={{ lineHeight: 1.3 }}>
            Pizza Juice is a simple, modular and accessible component library
            that gives you the building blocks you need to build your React
            applications.
          </Text>

          <Stack justify="center">
            <Button
              as={Link}
              to="/docs/installation"
              css={{
                '&:hover': {
                  textDecoration: 'none',
                },
              }}
            >
              Get started
            </Button>

            <Button
              as="a"
              variant="outlined"
              icon={<FiGithub size={20} />}
              href="https://github.com/NeonDistrict/pizza-juice"
              target="_blank"
              rel="noopener noreferrer"
              css={{
                '&:hover': {
                  textDecoration: 'none',
                },
              }}
            >
              Github
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
};
