import React, { useMemo } from 'react';
import {
  MobileContainer,
  PaginationContainer,
  ArrowLeft,
  ArrowRight
} from './styles';

import { useMediaQuery } from '../../hooks';

export type PaginationProps = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  canPrevious: boolean;
  canNext: boolean;
  goNext: () => void;
  goPrevious: () => void;
  gotoPage: (...args) => void;
  pageIndex: number;
  limit?: number;
};

type MobilePagination = Pick<
  PaginationProps,
  | 'currentPage'
  | 'totalCount'
  | 'canPrevious'
  | 'canNext'
  | 'goNext'
  | 'goPrevious'
>;
const MobilePagination = ({
  currentPage,
  totalCount,
  canPrevious,
  canNext,
  goNext,
  goPrevious
}: MobilePagination) => {
  return (
    <MobileContainer>
      <ArrowLeft canGo={canPrevious} onClick={goPrevious} />
      {currentPage} of {totalCount}
      <ArrowRight canGo={canNext} onClick={goNext} />
    </MobileContainer>
  );
};

const range = (start, end) => {
  return Array.from({ length: end - (start + 1) }, (_, idx) => idx + start);
};

const DesktopPagination = ({
  currentPage,
  pageSize,
  totalCount,
  canPrevious,
  canNext,
  goNext,
  goPrevious
}) => {
  return (
    <PaginationContainer>
      <ArrowLeft canGo={canPrevious} onClick={goPrevious} />
      {useMemo(() => {
        // logic here
      }, [currentPage, totalCount])}
      <ArrowRight canGo={canNext} onClick={goNext} />
    </PaginationContainer>
  );
};

const Pagination = ({ limit = 5, ...args }: PaginationProps) => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return isMobile ? (
    <MobilePagination {...args} />
  ) : (
    <DesktopPagination {...args} />
  );
};

export default Pagination;
