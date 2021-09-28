import React from 'react';
import { MobileContainer, PaginationContainer } from './styles';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useTheme } from 'styled-components';
export type PaginationProps = {
  totalCount: number;
  currentPage: number;
  canPrevious: boolean;
  canNext: boolean;
  goNext: () => void;
  goPrevious: () => void;
};

const Pagination = ({
  totalCount,
  currentPage,
  canPrevious,
  canNext,
  goNext,
  goPrevious
}: PaginationProps) => {
  const theme = useTheme();
  const pink = theme.colors.pink['100'];
  const grey = theme.colors.grey['400'];

  // This is the mobile version
  return (
    <PaginationContainer>
      <FaArrowLeft
        color={canPrevious ? pink : grey}
        onClick={goPrevious}
        cursor={canPrevious ? 'pointer' : 'default'}
      />
      <MobileContainer>
        {currentPage} of {totalCount}
      </MobileContainer>
      <FaArrowRight
        color={canNext ? pink : grey}
        onClick={goNext}
        cursor={canNext ? 'pointer' : 'default'}
      />
    </PaginationContainer>
  );
};

export default Pagination;
