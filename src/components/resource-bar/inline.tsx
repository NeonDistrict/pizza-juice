import React from 'react';

import { Image } from '../image';

import { ResourceBarProps } from '.';

import { useResourceBar } from './use-resource-bar';

import NeonImage from '../../assets/img/neon.png';
import JuiceImage from '../../assets/img/juice.png';
import PartsImage from '../../assets/img/parts.png';

import * as S from './styles.inline';
import { CaretUpIcon } from './icon';
import { Flex } from '../../..';

export const InlineResourceBar = ({
  neon = 0,
  juice = 0,
  parts = 0,
  hasText = true,
  ...props
}: ResourceBarProps) => {
  const { neonType, juiceType, partsType } = useResourceBar(neon, juice, parts);

  return (
    <S.Wrapper {...props}>
      <S.Item>
        <Image src={NeonImage} alt="Neon" css={{ size: 20 }} />

        <Flex align="center">
          {hasText && <S.Text>Neon:</S.Text>}

          <S.Arrow orientation={neonType}>
            <CaretUpIcon />
          </S.Arrow>

          <S.Text>{Math.abs(neon)}</S.Text>
        </Flex>
        <S.Separator />
      </S.Item>
      <S.Item>
        <Image src={JuiceImage} alt="Juice" css={{ w: 20, h: 15 }} />

        <Flex align="center">
          {hasText && <S.Text>Juice:</S.Text>}

          <S.Arrow orientation={juiceType}>
            <CaretUpIcon />
          </S.Arrow>

          <S.Text> {Math.abs(juice)}</S.Text>
        </Flex>

        <S.Separator />
      </S.Item>
      <S.Item>
        <Image src={PartsImage} alt="Parts" css={{ w: 17, h: 20 }} />

        <Flex align="center">
          {hasText && <S.Text>Parts: </S.Text>}

          <S.Arrow orientation={partsType}>
            <CaretUpIcon />
          </S.Arrow>

          <S.Text> {Math.abs(parts)}</S.Text>
        </Flex>
      </S.Item>
    </S.Wrapper>
  );
};
