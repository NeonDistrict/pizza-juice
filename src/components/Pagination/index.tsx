import React, { useMemo } from 'react';
import {
  MobileContainer,
  PaginationContainer,
  NumberContainer,
  Number,
  ArrowLeft,
  ArrowRight
} from './styles';

import { useMediaQuery } from '../../hooks';

export type PaginationProps = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  canPrevious: boolean;
  canNext: boolean;
  limit?: number;
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
    <MobileContainer>
      <ArrowLeft canGo={canPrevious} onClick={goPrevious} />
      {currentPage} of {totalCount}
      <ArrowRight canGo={canNext} onClick={goNext} />
    </MobileContainer>
  );
};

type DesktopPagination = Pick<
  PaginationProps,
  'currentPage' | 'pageSize' | 'totalCount' | 'setCurrentPage' | 'limit'
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
  goPrevious
}: DesktopPagination) => {
  const generatePages = (currentPage, limit) => {
    const start = Math.floor((currentPage - 1) / limit) * limit;
    return new Array(limit).fill(0).map((_, idx) => start + idx + 1);
  };

  const pages = useMemo(() => generatePages(currentPage, limit), [
    pageSize,
    limit
  ]);
  const totalPages = Math.ceil(totalCount / pageSize);
  console.log('totalPages', totalPages);

  return (
    <PaginationContainer>
      <ArrowLeft canGo={canPrevious} onClick={goPrevious} />
      {pages.map((page, index) =>
        page <= totalPages && index <= limit! - 1 ? (
          <NumberContainer active={currentPage === page}>
            <Number key={index} onClick={() => setCurrentPage(page)}>
              {page}
            </Number>
          </NumberContainer>
        ) : null
      )}
      <ArrowRight canGo={canNext} onClick={goNext} />
    </PaginationContainer>
  );
};

const Pagination = ({
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
      {...args}
    />
  );
};

export default Pagination;
