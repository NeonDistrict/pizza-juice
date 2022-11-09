import React, { HTMLAttributes, useMemo } from 'react';

import { CSS } from '../../system';
import { forwardRef, cx } from '../../utils';

import { useMediaQuery } from '../../hooks';

import { Text, Flex } from '../../..';

import { DesktopPagination } from './desktop';
import { MobilePagination } from './mobile';

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
   *  Number of pages that will show in the component.
   *  @default 5
   */
  neighbors?: number;
  /**
   * A boolean to indicate if the component should have the jump page box
   */
  jumpControl?: boolean;
  /**
   * CSS properties
   */
  css?: CSS;
  /**
   * The React state hook to update the current page.
   */
  setPage: (page: number) => void;
} & HTMLAttributes<HTMLDivElement>;

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

  const formatedLabel = useMemo(() => {
    return (total !== 0 ? `${start}-${end} of ` : '') + `${total} results`;
  }, [start, end, total]);

  return (
    <Flex align="center" justify="center">
      <Text size="sm" css={{ color: '$grey-400', textAlign: 'center' }}>
        {formatedLabel}
      </Text>
    </Flex>
  );
};

/**
 * Pagination component
 *
 * @description enables the user to select a specific page from a range of pages.
 */
export const Pagination = forwardRef<PaginationProps, 'div'>((props, ref) => {
  const {
    neighbors = 5,
    total,
    pageSize,
    page,
    className,
    setPage,
    ...rest
  } = props;

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
          ref={ref}
          className={cx('pagination', className)}
          page={page}
          setPage={setPage}
          canNext={canNext}
          canPrevious={canPrevious}
          totalPage={totalPage}
          {...rest}
        />
      ) : (
        <DesktopPagination
          ref={ref}
          className={cx('pagination', className)}
          page={page}
          setPage={setPage}
          neighbors={neighbors}
          canNext={canNext}
          canPrevious={canPrevious}
          totalPage={totalPage}
          {...rest}
        />
      )}

      <PageInfo total={total} page={page} pageSize={pageSize} />
    </Flex>
  );
});
