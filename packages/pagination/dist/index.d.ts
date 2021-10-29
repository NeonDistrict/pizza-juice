declare type PaginationProps = {
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
declare const Pagination: ({ quickJumpButton, currentPage, setCurrentPage, limit, ...args }: PaginationProps) => JSX.Element;

export { Pagination, PaginationProps };
