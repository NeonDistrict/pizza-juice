import React from 'react';

import { NeonIcon, JuiceIcon, PartsIcon } from './icons';

import * as S from './styles';

export type ResourcesProps = {
  neon: number;
  juice: number;
  parts: number;
  hasIcon: boolean;
  hasText: boolean;
};

const Resources = ({
  neon,
  juice,
  parts,
  hasIcon,
  hasText,
}: ResourcesProps) => {
  return (
    <S.Wrapper>
      <S.Item>
        {hasIcon && <NeonIcon />}
        <S.Text>
          {hasText && 'Neon: '}
          {neon}
        </S.Text>
        <S.Separator />
      </S.Item>
      <S.Item>
        {hasIcon && <JuiceIcon />}
        <S.Text>
          {hasText && 'Juice: '}
          {juice}
        </S.Text>
        <S.Separator />
      </S.Item>
      <S.Item>
        {hasIcon && <PartsIcon />}
        <S.Text>
          {hasText && 'Parts: '}
          {parts}
        </S.Text>
      </S.Item>
    </S.Wrapper>
  );
};

export { Resources };
