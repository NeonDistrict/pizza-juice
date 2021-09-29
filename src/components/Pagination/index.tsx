import React, { useState } from 'react';
import {
  MobileContainer,
  PaginationContainer,
  NumberContainer,
  Number
} from './styles';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useTheme } from 'styled-components';

export type PaginationProps = {
  totalCount: number;
  currentPage: number;
  canPrevious: boolean;
  canNext: boolean;
  goNext: () => void;
  goPrevious: () => void;
  gotoPage: (...args) => void;
  pageIndex: number;
  limit?: number;
};

const Pagination = ({
  totalCount,
  currentPage,
  canPrevious,
  canNext,
  goNext,
  goPrevious,
  gotoPage,
  pageIndex,
  limit = 5
}: PaginationProps) => {
  const theme = useTheme();
  const pink = theme.colors.pink['100'];
  const grey = theme.colors.grey['400'];

  return (
    <PaginationContainer>
      <FaArrowLeft
        color={canPrevious ? pink : grey}
        onClick={goPrevious}
        cursor={canPrevious ? 'pointer' : 'default'}
      />
      {/* <MobileContainer>
        {currentPage} of {totalCount}
      </MobileContainer> */}
      {Array.from({ length: totalCount }, (_, i) => i + 1)
        .slice()
        .map((page, i) => {})}
      <FaArrowRight
        color={canNext ? pink : grey}
        onClick={goNext}
        cursor={canNext ? 'pointer' : 'default'}
      />
    </PaginationContainer>
  );
};

export default Pagination;
