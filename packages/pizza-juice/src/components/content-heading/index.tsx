import React, { HTMLAttributes } from 'react';

import { CSS } from '../../system';
import { cx, forwardRef } from '../../utils';

import { InfoIcon } from './icon';

import * as S from './styles';

export type ContentHeadingProps = {
  /**
   * Title of the heading
   */
  title?: string;
  /**
   * Description of the heading
   */
  children?: React.ReactNode;
  /**
   * Show info icon
   *
   * @default `false`
   */
  info?: boolean;
  /**
   * Show divider line
   *
   * @default `true`
   */
  line?: boolean;
  /**
   * CSS properties
   */
  css?: CSS;
} & HTMLAttributes<HTMLDivElement>;

/**
 * ContentHeading component
 *
 * @description A component to display a title and description
 */
export const ContentHeading = forwardRef<ContentHeadingProps, 'div'>(
  (props, ref) => {
    const { title, children, line, info, className, ...rest } = props;

    return (
      <S.Wrapper
        ref={ref}
        className={cx('content-heading', className)}
        {...rest}
      >
        <S.Title>
          {title}

          {info && <InfoIcon />}
        </S.Title>

        {children && <S.Description line={line}>{children}</S.Description>}
      </S.Wrapper>
    );
  },
);
