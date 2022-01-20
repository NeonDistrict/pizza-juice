import React from 'react';

import { Image } from '../image';
import { Box } from '../box';
import { Flex } from '../flex';
import { Text } from '../text';
import { Divider } from '../divider';

import { ResourceBarProps } from '.';

import { useResourceBar } from './use-resource-bar';

import { CaretUpIcon } from './icon';

import NeonImage from '../../assets/img/neon.png';
import JuiceImage from '../../assets/img/juice.png';
import PartsImage from '../../assets/img/parts.png';

import * as S from './styles.normal';

export const NormalResourceBar = ({
  neon = 0,
  juice = 0,
  parts = 0,
  hasText = true,
  ...props
}: ResourceBarProps) => {
  const { padStart, neonType, juiceType, partsType } = useResourceBar(
    neon,
    juice,
    parts,
  );

  return (
    <S.Wrapper {...props}>
      <Box>
        <Flex align="center" justify="between">
          <Flex align="center" gap="3">
            <Flex css={{ w: 20 }}>
              <Image src={NeonImage} alt="Neon" css={{ size: 20 }} />
            </Flex>

            {hasText && (
              <Text weight="medium" transform="uppercase" css={{ w: 30 }}>
                Neon
              </Text>
            )}
          </Flex>

          <S.Arrow orientation={neonType}>
            <CaretUpIcon />
          </S.Arrow>

          <Text weight="medium" size="xs">
            {padStart(Math.abs(neon))}
          </Text>
        </Flex>

        <Divider css={{ $$color: '$grey-700', m: 2 }} />
      </Box>

      <Box>
        <Flex align="center" justify="between">
          <Flex align="center" gap="3">
            <Flex css={{ w: 20 }}>
              <Image src={JuiceImage} alt="Juice" css={{ w: 20, h: 15 }} />
            </Flex>

            {hasText && (
              <Text weight="medium" transform="uppercase" css={{ w: 30 }}>
                Juice
              </Text>
            )}
          </Flex>

          <S.Arrow orientation={juiceType}>
            <CaretUpIcon />
          </S.Arrow>

          <Text weight="medium" size="xs">
            {padStart(Math.abs(juice))}
          </Text>
        </Flex>

        <Divider css={{ $$color: '$grey-700', m: 2 }} />
      </Box>

      <Box>
        <Flex align="center" justify="between">
          <Flex align="center" gap="3">
            <Flex css={{ w: 20 }}>
              <Image src={PartsImage} alt="Parts" css={{ w: 17, h: 20 }} />
            </Flex>

            {hasText && (
              <Text weight="medium" transform="uppercase" css={{ w: 30 }}>
                Parts
              </Text>
            )}
          </Flex>

          <S.Arrow orientation={partsType}>
            <CaretUpIcon />
          </S.Arrow>

          <Text weight="medium" size="xs">
            {parts}
          </Text>
        </Flex>

        <Divider css={{ $$color: '$grey-700', m: 2 }} />
      </Box>
    </S.Wrapper>
  );
};
