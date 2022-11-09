import React from 'react';

import { forwardRef } from '../../utils';

import { Text } from '../text';
import { Flex } from '../flex';

import { PaginationProps } from '.';

import { ChevronLeft, ChevronRight } from '../../icons';

import * as S from './styles';

type MobilePagination = Pick<PaginationProps, 'page' | 'setPage'> & {
  canNext: boolean;
  canPrevious: boolean;
  totalPage: number;
};

export const MobilePagination = forwardRef<MobilePagination, 'div'>(
  (props, ref) => {
    const { page, totalPage, canPrevious, canNext, setPage, ...rest } = props;

    return (
      <Flex ref={ref} gap={4} {...rest}>
        <S.ArrowContainer
          canGo={canPrevious}
          disabled={!canPrevious}
          onClick={() => setPage(page - 1)}
        >
          <ChevronLeft css={{ size: 24 }} />
        </S.ArrowContainer>
        <Text size="sm" css={{ color: '$white' }}>
          {page} of {totalPage}
        </Text>
        <S.ArrowContainer
          canGo={canNext}
          disabled={!canNext}
          onClick={() => setPage(page + 1)}
        >
          <ChevronRight css={{ size: 24 }} />
        </S.ArrowContainer>
      </Flex>
    );
  },
);
