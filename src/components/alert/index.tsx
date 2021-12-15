import React, { useState } from 'react';

import { Flex } from '../flex';
import { Text } from '../text';
import type { ButtonProps } from '../button';

import { DestructiveIcon } from './icons/destructive';
import { SuccessIcon } from './icons/success';
import { WarningIcon } from './icons/warning';
import { CloseIcon } from './icons/close';

import * as S from './styles';

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
   * Action buttons of the alert
   */
  children?: React.ReactNode;
};

//
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
  variant,
  ...props
}: AlertProps) => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <S.Wrapper variant={variant} wrap="wrap" gap={3} {...props}>
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
          {variant && variant !== 'primary' && (
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
            <Flex gap={4} justify="between" wrap="wrap">
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
              <Flex
                align="end"
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
            </Flex>
          </Flex>
        </S.Wrapper>
      )}
    </>
  );
};
