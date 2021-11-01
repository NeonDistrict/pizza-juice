import React, { useMemo } from 'react';

import {
  MobileContainer,
  PaginationContainer,
  NumberContainer,
  Number,
  ArrowLeft,
  ArrowRight,
  FirstPageArrow,
  LastPageArrow
} from './styles';

type BaseIconProps = {
  /**
   *
   */
  d?: string;
  /**
   *
   */
  children?: React.ReactNode;
};

const BaseIcon = ({ d, children }: BaseIconProps) => (
  <svg
    viewBox="0 0 16 16"
    width="1rem"
    height="1rem"
    focusable="false"
    aria-hidden="true"
  >
    {children ?? <path fill="currentColor" d={d} />}
  </svg>
);

const LeftIcon = () => (
  <BaseIcon d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
);
const RightIcon = () => (
  <BaseIcon d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
);

const DoubleLeftIcon = () => (
  <BaseIcon>
    <>
      <path d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
      <path d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
    </>
  </BaseIcon>
);

const DoubleRightIcon = () => (
  <BaseIcon>
    <>
      <path d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
      <path d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
    </>
  </BaseIcon>
);

import { useMediaQuery } from '../../hooks';

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
    <MobileContainer>
      <ArrowLeft canGo={canPrevious} onClick={goPrevious}>
        <LeftIcon />
      </ArrowLeft>
      {currentPage} of {totalCount}
      <ArrowRight canGo={canNext} onClick={goNext}>
        <RightIcon />
      </ArrowRight>
    </MobileContainer>
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
    <PaginationContainer>
      {quickJumpButton && (
        <FirstPageArrow onClick={() => setCurrentPage(1)}>
          <DoubleLeftIcon />
        </FirstPageArrow>
      )}
      <ArrowLeft canGo={canPrevious} onClick={goPrevious}>
        <LeftIcon />
      </ArrowLeft>
      {pages.map((page, index) =>
        page <= totalPages && index <= limit! - 1 ? (
          <NumberContainer active={currentPage === page}>
            <Number key={index} onClick={() => setCurrentPage(page)}>
              {page}
            </Number>
          </NumberContainer>
        ) : null
      )}
      <ArrowRight canGo={canNext} onClick={goNext}>
        <RightIcon />
      </ArrowRight>

      {quickJumpButton && (
        <LastPageArrow onClick={() => setCurrentPage(totalPages)}>
          <DoubleRightIcon />
        </LastPageArrow>
      )}
    </PaginationContainer>
  );
};

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
