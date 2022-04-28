import React, { HTMLAttributes, useState } from 'react';

import { Flex } from '../flex';
import { Text } from '../text';
import { Spacer } from '../spacer';
import type { ButtonProps } from '../button';

import { DestructiveIcon } from './icons/destructive';
import { SuccessIcon } from './icons/success';
import { WarningIcon } from './icons/warning';
import { CloseIcon } from './icons/close';

import * as S from './styles';

import { CSS } from '../../system';
import { useBreakpoint } from '../../hooks';

export type AlertProps = {
  /**
   * Title of the alert
   */
  title: string;
  /**
   * Subtitle of the alert
   */
  subtitle?: string;
  /**
   * Description of the alert
   */
  description?: string;
  /**
   * Variant style of the alert
   * @default "primary"
   */
  variant?: 'primary' | 'destructive' | 'warning' | 'success';
  /**
   * Icon to display in the alert
   * @default "true"
   */
  dismissible?: boolean;
  /**
   * Banner style of the alert
   * @default "false"
   */
  banner?: boolean;
  /**
   * Align of the action buttons
   * @default "end"
   */
  align?: 'end' | 'center' | 'start';
  /**
   * Action buttons of the alert
   */
  children?: React.ReactNode;
  /**
   * CSS properties
   */
  css?: CSS;
} & HTMLAttributes<HTMLDivElement>;

const icons = {
  destructive: <DestructiveIcon />,
  success: <SuccessIcon />,
  warning: <WarningIcon />,
};

/**
 * Alert component
 *
 * @description used to communicate a state that affects a system, feature or page.
 */
export const Alert = ({
  title,
  subtitle,
  description,
  children,
  dismissible = true,
  variant,
  banner,
  align = 'end',
  ...props
}: AlertProps) => {
  const [show, setShow] = useState(true);
  const isDesktop = useBreakpoint('sm');
  const propsWithoutColor = { ...props, color: undefined };

  return (
    <>
      {show && (
        <S.Wrapper variant={variant} wrap="wrap" gap={3} {...propsWithoutColor}>
          {dismissible && (
            <S.IconWrapper
              variant={variant}
              onClick={() => setShow(false)}
              css={{
                fontSize: '$lg',
                position: 'absolute',
                top: '16px',
                right: '16px',
                cursor: 'pointer',
              }}
            >
              <CloseIcon />
            </S.IconWrapper>
          )}
          {!banner && variant && variant !== 'primary' && (
            <Flex css={{ width: '100%', '@sm': { width: 'auto' } }}>
              <S.IconWrapper variant={variant} css={{ fontSize: '$lg' }}>
                {icons[variant]}
              </S.IconWrapper>
            </Flex>
          )}
          <Flex
            direction="column"
            gap={1}
            css={{ flex: 'auto', '@sm': { flex: 1 } }}
          >
            <Flex>
              <S.Title size="xl" transform="uppercase" variant={variant}>
                {title}
              </S.Title>
            </Flex>
            <Flex
              gap={1}
              direction="column"
              css={{ width: '100%', '@sm': { width: 'auto' } }}
            >
              {subtitle && (
                <S.Subtitle transform="uppercase" variant={variant}>
                  {subtitle}
                </S.Subtitle>
              )}
              {description && (
                <Text transform="normal" size="sm" css={{ color: '$white' }}>
                  {description}
                </Text>
              )}
            </Flex>
          </Flex>
          {isDesktop && <Spacer />}
          <Flex
            align={align}
            gap={2}
            wrap="wrap"
            css={{ flexGrow: 1, '@sm': { flexGrow: 'unset' } }}
          >
            {React.Children.map(children, (child) =>
              React.cloneElement(child as React.ReactElement<ButtonProps>, {
                fluid: { '@initial': true, '@sm': false },
              }),
            )}
          </Flex>
        </S.Wrapper>
      )}
    </>
  );
};
