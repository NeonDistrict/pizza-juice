import React from "react";

import { Box, Flex, Theme, theme, Text } from "@blockadegames/pizza-juice";

type TokenColorProps = {
  color: `${keyof Theme['colors']}`
  outline?: boolean
};

export const TokenColor = ({ color, outline }: TokenColorProps) => {
  return (
    <Flex gap={4} align="center">
      <Box css={{ size: 50, bg: `$${color}`, br: "$sm", bs: outline ? 'inset 0 0 0 1px $colors$grey-700' : undefined }} />
      <Flex gap={2} direction="column">
        <Text weight="medium">${color}</Text>
        <Text weight="medium" transform="uppercase" css={{ color: "$grey-400" }}>
          {theme.colors[color]}
        </Text>
      </Flex>
    </Flex>
  );
};
