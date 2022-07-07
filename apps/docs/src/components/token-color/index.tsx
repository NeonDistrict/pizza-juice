import React from "react";

import { Box, Flex, Theme, Text } from "@blockadegames/pizza-juice";

type TokenColorProps = {
  color: `$${keyof Theme['colors']}`
  hex: `#${string}`;
  outline?: boolean
};

export const TokenColor = ({ color, hex, outline }: TokenColorProps) => {
  return (
    <Flex gap={4} align="center">
      <Box css={{ size: 50, bg: color, br: "$sm", bs: outline ? 'inset 0 0 0 1px $colors$grey-700' : undefined }} />
      <Flex gap={2} direction="column">
        <Text weight="medium">{color}</Text>
        <Text weight="medium" css={{ color: "$grey-400" }}>
          {hex}
        </Text>
      </Flex>
    </Flex>
  );
};
