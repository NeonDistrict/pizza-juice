import React, { useMemo } from 'react';

import { useMediaQuery } from '../../hooks';

import { DoubleLeftIcon, DoubleRightIcon, LeftIcon, RightIcon } from './icon';

import * as S from './styles';

export type PaginationProps = {
  /**
   *
   */
  totalCount: number;
  /**
   *
   */
  pageSize: number;
  /**
   *
   */
  currentPage: number;
  /**
   *
   */
  setCurrentPage: (page: number) => void;
  /**
   *
   */
  canPrevious: boolean;
  /**
   *
   */
  canNext: boolean;
  /**
   *
   */
  limit?: number;
  /**
   *
   */
  quickJumpButton?: boolean;
};

type MobilePagination = Pick<
  PaginationProps,
  'currentPage' | 'totalCount' | 'canPrevious' | 'canNext'
> & { goPrevious: () => void; goNext: () => void };
const MobilePagination = ({
  currentPage,
  totalCount,
  canPrevious,
  canNext,
  goPrevious,
  goNext
}: MobilePagination) => {
  return (
    <S.MobileContainer>
      <S.ArrowLeft canGo={canPrevious} onClick={goPrevious}>
        <LeftIcon />
      </S.ArrowLeft>
      {currentPage} of {totalCount}
      <S.ArrowRight canGo={canNext} onClick={goNext}>
        <RightIcon />
      </S.ArrowRight>
    </S.MobileContainer>
  );
};

type DesktopPagination = Pick<
  PaginationProps,
  | 'currentPage'
  | 'pageSize'
  | 'totalCount'
  | 'setCurrentPage'
  | 'limit'
  | 'quickJumpButton'
> & {
  goPrevious: () => void;
  goNext: () => void;
  canPrevious: boolean;
  canNext: boolean;
};

const DesktopPagination = ({
  limit,
  currentPage,
  setCurrentPage,
  pageSize,
  totalCount,
  canPrevious,
  canNext,
  goNext,
  goPrevious,
  quickJumpButton
}: DesktopPagination) => {
  const generatePages = (currentPage: number, limit: number) => {
    const start = Math.floor((currentPage - 1) / limit) * limit;
    return new Array(limit).fill(0).map((_, idx) => start + idx + 1);
  };

  const pages = useMemo(() => generatePages(currentPage, limit!), [
    pageSize,
    limit
  ]);
  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <S.PaginationContainer>
      {quickJumpButton && (
        <S.FirstPageArrow onClick={() => setCurrentPage(1)}>
          <DoubleLeftIcon />
        </S.FirstPageArrow>
      )}
      <S.ArrowLeft canGo={canPrevious} onClick={goPrevious}>
        <LeftIcon />
      </S.ArrowLeft>
      {pages.map((page, index) =>
        page <= totalPages && index <= limit! - 1 ? (
          <S.NumberContainer active={currentPage === page}>
            <S.Number key={index} onClick={() => setCurrentPage(page)}>
              {page}
            </S.Number>
          </S.NumberContainer>
        ) : null
      )}
      <S.ArrowRight canGo={canNext} onClick={goNext}>
        <RightIcon />
      </S.ArrowRight>

      {quickJumpButton && (
        <S.LastPageArrow onClick={() => setCurrentPage(totalPages)}>
          <DoubleRightIcon />
        </S.LastPageArrow>
      )}
    </S.PaginationContainer>
  );
};

/**
 * Pagination component
 *
 * @description enables the user to select a specific page from a range of pages.
 */
export const Pagination = ({
  quickJumpButton = false,
  currentPage,
  setCurrentPage,
  limit = 5,
  ...args
}: PaginationProps) => {
  const goNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const goPrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const isMobile = useMediaQuery('(max-width: 600px)');

  return isMobile ? (
    <MobilePagination
      currentPage={currentPage}
      goNext={goNext}
      goPrevious={goPrevious}
      {...args}
    />
  ) : (
    <DesktopPagination
      goNext={goNext}
      goPrevious={goPrevious}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      limit={limit}
      quickJumpButton={quickJumpButton}
      {...args}
    />
  );
};
