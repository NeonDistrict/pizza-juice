import React from "react";

import { Box, Flex, Theme, theme, Text } from "@blockadegames/pizza-juice";

type TokenColorProps = {
  radius: `${keyof Theme['radii']}`
  bg: `${keyof Theme['colors']}`
  description: string
};

export const TokenRadius = ({ radius, bg, description }: TokenColorProps) => {
  return (
    <Flex gap={4} align="center">
      <Box css={{ size: 50, bg: `$${bg}`, br: `$${radius}`}} />
      <Flex gap={2} direction="column">
        <Text weight="medium">${radius}</Text>
        <Text weight="medium" css={{ color: "$grey-400" }}>
          {description}
        </Text>
      </Flex>
    </Flex>
  );
};
