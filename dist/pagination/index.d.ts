import { HTMLAttributes } from 'react';
import { C as CSS } from '../index-a9773ec4';
import '@stitches/react/types/config';
import '@stitches/react';

declare type PaginationProps = {
    /**
     * The total number of pages.
     */
    totalCount: number;
    /**
     * The size of the pagination.
     */
    pageSize: number;
    /**
     * The current page.
     */
    currentPage: number;
    /**
     * The React state hook to update the current page.
     */
    setCurrentPage: (page: number) => void;
    /**
     * A boolean to indicate if we can go to the previous page.
     */
    canPrevious: boolean;
    /**
     * A boolean to indicate if we can go to the next page.
     */
    canNext: boolean;
    /**
     *  Number of pages that will show in the component.
     *  @default 5
     */
    limit?: number;
    /**
     * A boolean to indicate if the component should have the go to first/go to last buttons.
     */
    quickJumpButton?: boolean;
    /**
     * CSS properties
     */
    css?: CSS;
} & HTMLAttributes<HTMLDivElement>;
/**
 * Pagination component
 *
 * @description enables the user to select a specific page from a range of pages.
 */
declare const Pagination: ({ quickJumpButton, currentPage, setCurrentPage, limit, ...props }: PaginationProps) => JSX.Element;

export { Pagination, PaginationProps };
