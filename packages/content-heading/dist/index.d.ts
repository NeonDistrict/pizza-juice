declare type ContentHeadingProps = {
    /**
     *
     */
    title?: string;
    /**
     *
     */
    description?: string;
    /**
     *
     * @default `false
     */
    info?: boolean;
    /**
     *
     * @default `true`
     */
    line?: boolean;
};
/**
 * ContentHeading component
 *
 * @description A component to display a title and description
 */
declare const ContentHeading: ({ title, description, info, line }: ContentHeadingProps) => JSX.Element;

export { ContentHeading, ContentHeadingProps };
