/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { HTMLAttributes, useMemo } from 'react';

import { CSS } from '../../system';

import { useMediaQuery } from '../../hooks';

import { Text, Flex } from '../../..';

import {
  HiOutlineArrowSmLeft as LeftMobileIcon,
  HiOutlineArrowSmRight as RightMobileIcon,
  HiOutlineChevronDoubleLeft as DoubleLeftIcon,
  HiOutlineChevronDoubleRight as DoubleRightIcon,
  HiOutlineChevronLeft as LeftIcon,
  HiOutlineChevronRight as RightIcon,
} from 'react-icons/hi';

import * as S from './styles';

export type PaginationProps = {
  /**
   * The total amount of items.
   */
  total: number;
  /**
   * The size of the pagination.
   */
  pageSize: number;
  /**
   * The current page.
   */
  page: number;
  /**
   * The React state hook to update the current page.
   */
  setPage: (page: number) => void;
  /**
   *  Number of pages that will show in the component.
   *  @default 5
   */
  neighbors?: number;
  /**
   * A boolean to indicate if the component should have the go to first/go to last buttons.
   */
  quickJump?: boolean;
  /**
   * A boolean to indicate if the component should have the jump page box
   */
  jumpControl?: boolean;
  /**
   * CSS properties
   */
  css?: CSS;
} & HTMLAttributes<HTMLDivElement>;

type MobilePagination = Pick<
  PaginationProps,
  'page' | 'quickJump' | 'setPage'
> & {
  canNext: boolean;
  canPrevious: boolean;
  totalPage: number;
};
const MobilePagination = ({
  page,
  totalPage,
  canPrevious,
  canNext,
  quickJump,
  setPage,
}: MobilePagination) => {
  return (
    <Flex gap={4}>
      {quickJump && (
        <S.ArrowContainer
          canGo={canPrevious}
          disabled={!canPrevious}
          onClick={() => setPage(1)}
        >
          <DoubleLeftIcon />
        </S.ArrowContainer>
      )}
      <S.ArrowContainer
        canGo={canPrevious}
        disabled={!canPrevious}
        onClick={() => setPage(page - 1)}
      >
        {quickJump ? <LeftIcon /> : <LeftMobileIcon size={24} />}
      </S.ArrowContainer>
      <Text size="sm" css={{ color: '$white' }}>
        {page} of {totalPage}
      </Text>
      <S.ArrowContainer
        canGo={canNext}
        disabled={!canNext}
        onClick={() => setPage(page + 1)}
      >
        {quickJump ? <RightIcon /> : <RightMobileIcon size={24} />}
      </S.ArrowContainer>
      {quickJump && (
        <S.ArrowContainer
          canGo={canNext}
          disabled={!canNext}
          onClick={() => setPage(totalPage)}
        >
          <DoubleRightIcon />
        </S.ArrowContainer>
      )}
    </Flex>
  );
};

type DesktopPagination = Pick<
  PaginationProps,
  'page' | 'setPage' | 'neighbors' | 'quickJump'
> & {
  canPrevious: boolean;
  canNext: boolean;
  totalPage: number;
};

const DesktopPagination = ({
  neighbors,
  page,
  setPage,
  quickJump,
  canPrevious,
  canNext,
  totalPage,
}: DesktopPagination) => {
  const generatePages = (page: number, neighbors: number) => {
    const start = Math.floor((page - 1) / neighbors) * neighbors;
    return new Array(neighbors).fill(0).map((_, idx) => start + idx + 1);
  };

  const pages = useMemo(
    () => generatePages(page, neighbors!),
    [page, neighbors],
  );

  return (
    <Flex gap="4" direction="column">
      <S.PaginationContainer>
        <Flex align="center">
          {quickJump && (
            <S.ArrowContainer
              canGo={canPrevious}
              disabled={!canPrevious}
              onClick={() => setPage(1)}
            >
              <DoubleLeftIcon />
            </S.ArrowContainer>
          )}
          <S.ArrowContainer
            canGo={canPrevious}
            disabled={!canPrevious}
            onClick={() => setPage(page - 1)}
          >
            <LeftIcon />
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
            <RightIcon />
          </S.ArrowContainer>

          {quickJump && (
            <S.ArrowContainer
              canGo={canNext}
              disabled={!canNext}
              onClick={() => setPage(totalPage)}
            >
              <DoubleRightIcon />
            </S.ArrowContainer>
          )}
        </Flex>
      </S.PaginationContainer>
    </Flex>
  );
};

export const PageInfo = ({
  total,
  page,
  pageSize,
}: Pick<PaginationProps, 'total' | 'page' | 'pageSize'>) => {
  const start = useMemo(() => (page - 1) * pageSize + 1, [page, pageSize]);
  const end = useMemo(
    () => Math.min(total, page * pageSize),
    [page, pageSize, total],
  );

  return (
    <Flex align="center" justify="center">
      <Text size="sm" css={{ color: '$grey-400' }}>
        {start}-{end} of {total} results
      </Text>
    </Flex>
  );
};

/**
 * Pagination component
 *
 * @description enables the user to select a specific page from a range of pages.
 */
export const Pagination = ({
  quickJump = false,
  neighbors = 5,
  total,
  pageSize,
  page,
  setPage,
  ...props
}: PaginationProps) => {
  const totalPage = useMemo(
    () => Math.ceil(total / pageSize),
    [total, pageSize],
  );
  const canPrevious = useMemo(() => page > 1, [page]);
  const canNext = useMemo(() => page < totalPage, [page, totalPage]);

  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <Flex direction="column" gap={3} css={{ w: 'fit-content' }}>
      {isMobile ? (
        <MobilePagination
          page={page}
          setPage={setPage}
          canNext={canNext}
          canPrevious={canPrevious}
          totalPage={totalPage}
          quickJump={quickJump}
          {...props}
        />
      ) : (
        <DesktopPagination
          page={page}
          setPage={setPage}
          neighbors={neighbors}
          quickJump={quickJump}
          canNext={canNext}
          canPrevious={canPrevious}
          totalPage={totalPage}
          {...props}
        />
      )}
      <PageInfo total={total} page={page} pageSize={pageSize} />
    </Flex>
  );
};
