import React from 'react';

import { forwardRef } from '../../utils';

import { Text } from '../text';
import { Flex } from '../flex';

import { PaginationProps } from '.';

import {
  HiOutlineArrowSmLeft as LeftMobileIcon,
  HiOutlineArrowSmRight as RightMobileIcon,
  HiOutlineChevronDoubleLeft as DoubleLeftIcon,
  HiOutlineChevronDoubleRight as DoubleRightIcon,
  HiOutlineChevronLeft as LeftIcon,
  HiOutlineChevronRight as RightIcon,
} from 'react-icons/hi';

import * as S from './styles';

type MobilePagination = Pick<
  PaginationProps,
  'page' | 'quickJump' | 'setPage'
> & {
  canNext: boolean;
  canPrevious: boolean;
  totalPage: number;
};

export const MobilePagination = forwardRef<MobilePagination, 'div'>(
  (props, ref) => {
    const {
      page,
      totalPage,
      canPrevious,
      canNext,
      quickJump,
      setPage,
      ...rest
    } = props;

    return (
      <Flex ref={ref} gap={4} {...rest}>
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
  },
);
