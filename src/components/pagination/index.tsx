/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { HTMLAttributes, useMemo } from 'react';

import { CSS } from '../../system';

import { useMediaQuery } from '../../hooks';

import { Flex } from '../../components/flex';
import { Text } from '../../components/text';

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
  neighbours?: number;
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

type MobilePagination = Pick<PaginationProps, 'page' | 'quickJump'> & {
  goPrevious: () => void;
  goNext: () => void;
  canNext: boolean;
  canPrevious: boolean;
  totalPage: number;
};
const MobilePagination = ({
  page,
  totalPage,
  goPrevious,
  goNext,
  canPrevious,
  canNext,
}: MobilePagination) => {
  return (
    <S.MobileContainer>
      <S.ArrowLeft canGo={canPrevious} onClick={goPrevious}>
        <LeftMobileIcon size={24} />
      </S.ArrowLeft>
      {page} of {totalPage}
      <S.ArrowRight canGo={canNext} onClick={goNext}>
        <RightMobileIcon size={24} />
      </S.ArrowRight>
    </S.MobileContainer>
  );
};

type DesktopPagination = Pick<
  PaginationProps,
  'page' | 'setPage' | 'neighbours' | 'quickJump'
> & {
  goPrevious: () => void;
  goNext: () => void;
  canPrevious: boolean;
  canNext: boolean;
  totalPage: number;
};

const DesktopPagination = ({
  neighbours,
  page,
  setPage,
  goNext,
  goPrevious,
  quickJump,
  canPrevious,
  canNext,
  totalPage,
}: DesktopPagination) => {
  const generatePages = (page: number, neighbours: number) => {
    const start = Math.floor((page - 1) / neighbours) * neighbours;
    return new Array(neighbours).fill(0).map((_, idx) => start + idx + 1);
  };

  const pages = useMemo(
    () => generatePages(page, neighbours!),
    [page, neighbours],
  );

  return (
    <Flex gap="4" direction="column">
      <S.PaginationContainer>
        <S.IconContainer>
          {quickJump && (
            <S.FirstPageArrow canGo={canPrevious} onClick={() => setPage(1)}>
              <DoubleLeftIcon />
            </S.FirstPageArrow>
          )}
          <S.ArrowLeft canGo={canPrevious} onClick={goPrevious}>
            <LeftIcon />
          </S.ArrowLeft>
        </S.IconContainer>
        {pages.map((page, index) =>
          page <= totalPage && index <= neighbours! - 1 ? (
            <S.NumberContainer
              key={index}
              onClick={() => setPage(page)}
              active={page === page}
            >
              <Text weight="medium" size="sm">
                {page}
              </Text>
            </S.NumberContainer>
          ) : null,
        )}
        <S.IconContainer>
          <S.ArrowRight canGo={canNext} onClick={goNext}>
            <RightIcon />
          </S.ArrowRight>

          {quickJump && (
            <S.LastPageArrow canGo={canNext} onClick={() => setPage(totalPage)}>
              <DoubleRightIcon />
            </S.LastPageArrow>
          )}
        </S.IconContainer>
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
      <Text weight="medium" css={{ color: '$grey-400' }}>
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
  jumpControl = false,
  page,
  setPage,
  neighbours = 5,
  total,
  pageSize,
  ...props
}: PaginationProps) => {
  const totalPage = useMemo(
    () => Math.ceil(total / pageSize),
    [total, pageSize],
  );
  const canPrevious = useMemo(() => page > 1, [page]);
  const canNext = useMemo(() => page < totalPage, [page, totalPage]);

  const goNext = () => {
    setPage(page + 1);
  };

  const goPrevious = () => {
    setPage(page - 1);
  };

  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <Flex direction="column" gap="4">
      <Flex>
        {isMobile ? (
          <MobilePagination
            page={page}
            goNext={goNext}
            goPrevious={goPrevious}
            canPrevious={canPrevious}
            canNext={canNext}
            totalPage={totalPage}
            {...props}
          />
        ) : (
          <DesktopPagination
            goNext={goNext}
            goPrevious={goPrevious}
            page={page}
            setPage={setPage}
            neighbours={neighbours}
            quickJump={quickJump}
            canPrevious={canPrevious}
            canNext={canNext}
            totalPage={totalPage}
            {...props}
          />
        )}
        {jumpControl && <></>}
      </Flex>
      <PageInfo total={total} page={page} pageSize={pageSize} />
    </Flex>
  );
};
