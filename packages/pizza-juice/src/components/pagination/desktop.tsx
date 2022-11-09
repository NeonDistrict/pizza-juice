/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useMemo } from 'react';

import { forwardRef } from '../../utils';

import { PaginationProps } from '.';

import { Text } from '../text';
import { Flex } from '../flex';

import { ChevronLeft, ChevronRight } from '../../icons';

import * as S from './styles';

type DesktopPagination = Pick<
  PaginationProps,
  'page' | 'setPage' | 'neighbors'
> & {
  canPrevious: boolean;
  canNext: boolean;
  totalPage: number;
};

export const DesktopPagination = forwardRef<DesktopPagination, 'div'>(
  (props, ref) => {
    const {
      neighbors,
      page,
      setPage,
      canPrevious,
      canNext,
      totalPage,
      ...rest
    } = props;

    const generatePages = (page: number, neighbors: number) => {
      const start = Math.floor((page - 1) / neighbors) * neighbors;
      return new Array(neighbors).fill(0).map((_, idx) => start + idx + 1);
    };

    const pages = useMemo(
      () => generatePages(page, neighbors!),
      [page, neighbors],
    );

    return (
      <Flex ref={ref} gap="4" direction="column" {...rest}>
        <S.PaginationContainer>
          <Flex align="center">
            <S.ArrowContainer
              canGo={canPrevious}
              disabled={!canPrevious}
              onClick={() => setPage(page - 1)}
            >
              <ChevronLeft />
            </S.ArrowContainer>
          </Flex>
          {pages.map((thisPage, index) =>
            thisPage <= totalPage && index <= neighbors! - 1 ? (
              <S.NumberContainer
                key={index}
                onClick={() => setPage(thisPage)}
                active={thisPage === page}
              >
                <Text weight="medium" size="sm">
                  {thisPage}
                </Text>
              </S.NumberContainer>
            ) : null,
          )}
          <Flex align="center">
            <S.ArrowContainer
              canGo={canNext}
              disabled={!canNext}
              onClick={() => setPage(page + 1)}
            >
              <ChevronRight />
            </S.ArrowContainer>
          </Flex>
        </S.PaginationContainer>
      </Flex>
    );
  },
);
