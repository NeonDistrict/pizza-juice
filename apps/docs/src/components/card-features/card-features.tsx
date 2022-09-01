import React from 'react';

import Link from '@docusaurus/Link';

import { Box, Flex, Stack, Text } from '@blockadegames/pizza-juice';

type CardFeaturesProps = {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
};

export const CardFeatures = ({
  title,
  description,
  link,
  icon,
}: CardFeaturesProps) => {
  return (
    <Box
      as={Link}
      to={link}
      css={{
        color: '$white',
        '&:hover': {
          textDecoration: 'none',
        },
      }}
    >
      <Box
        css={{
          bg: '$grey-900',
          position: 'relative',
          p: '$14',
        }}
      >
        <Box css={{ position: 'absolute', top: 10, left: 20 }}>{icon}</Box>

        <Box>
          <Stack direction="column">
            <Text size="4xl" weight="bold">
              {title}
            </Text>

            <Text size="lg" css={{ lineHeight: 1.3 }}>
              {description}
            </Text>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
