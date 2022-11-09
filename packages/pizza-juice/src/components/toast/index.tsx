import React from 'react';

import * as toastify from 'react-toastify';

import { forwardRef } from '../../utils';

import { Box } from '../box';
import { Flex } from '../flex';
import { Image } from '../image';
import { Text } from '../text';
import { Stack } from '../stack';

import { Close, InfoOutline, FaceSad, Check } from '../../icons';

import * as S from './styles';
import { Countdown } from '../countdown';

export type ToastContainerProps = toastify.ToastContainerProps;

/**
 * ToastContainer
 *
 * @description Used to render the Toasts in your application.
 */
export const ToastContainer = forwardRef<ToastContainerProps, 'div'>(
  (props, ref) => {
    return <S.Container ref={ref} {...props} />;
  },
);

type SharedProps = {
  type: 'default' | 'warning' | 'error' | 'success' | 'primary';
  stacked?: boolean;
  title: string;
  message?: string;
  subitems?: React.ReactNode;
  // How can I specify the type here to allow ONLY <Button /> ?
  button1?: JSX.Element;
  button2?: JSX.Element;
  dismissible?: boolean;
  onDismiss?: () => void;
};

export type ToastVariantType =
  | {
      variant: 'icon';
      icon?: JSX.Element;
    }
  | {
      variant: 'image';
      imgSrc: string;
    }
  | {
      variant: 'timer';
      onFinish?: () => void;
      endDate: number;
    };

export type ToastProps = SharedProps & ToastVariantType;

const mapVariantCss = {
  icon: {
    p: '$4',
  },
  image: {},
  timer: {
    p: '$4',
  },
};

/**
 * Custom styled Toast to be displayed in the ToastContainer
 */
export const ToastBase = ({ stacked = false, ...props }: ToastProps) => {
  const direction = stacked ? 'column' : 'row';

  return (
    <S.Wrapper type={props.type}>
      {props.variant === 'image' && (
        <Image css={{ maxSize: 80 }} src={props.imgSrc} />
      )}
      {props.variant === 'timer' && (
        <S.ColorWrapper type={props.type}>
          <Countdown
            endDate={props.endDate}
            size="sm"
            onFinish={props.onFinish}
            css={{
              p: '$4',
              alignSelf: 'center',
              color: 'inherit',
            }}
          />
        </S.ColorWrapper>
      )}
      {props.variant === 'icon' && (
        <S.IconWrapper type={props.type}>{props.icon}</S.IconWrapper>
      )}

      <Stack
        gap={4}
        direction={direction}
        align={stacked ? 'start' : 'center'}
        css={{
          ...mapVariantCss[props.variant ?? 'icon'],
        }}
      >
        <Flex direction="column" gap={1}>
          <S.Title type={props.type}>{props.title}</S.Title>
          {props.subitems && !props.message && <Box>{props.subitems}</Box>}
          {props.message && !props.subitems && (
            <Text transform="normal" size="sm" css={{ lineHeight: '20px' }}>
              {props.message}
            </Text>
          )}
        </Flex>

        {(props.button1 || props.button2) && (
          <S.ButtonWrapper stacked={stacked}>
            {props.button1 &&
              React.cloneElement(props.button1, {
                variant: 'outlined',
                color: 'secondary',
              })}
            {props.button2 &&
              React.cloneElement(props.button2, {
                variant: 'naked',
                color: 'secondary',
              })}
          </S.ButtonWrapper>
        )}
      </Stack>

      {props.dismissible && (
        <Flex
          justify="center"
          align={stacked ? 'start' : 'center'}
          css={{ p: '$4' }}
        >
          <Close
            onClick={() => {
              if (props.onDismiss) {
                props.onDismiss();
              }
              toastify.toast.dismiss();
            }}
          />
        </Flex>
      )}
    </S.Wrapper>
  );
};

export type ToastOptions = Omit<
  toastify.ToastOptions,
  'type' | 'icon' | 'theme' | 'closeButton' | 'hideProgressBar'
>;

type CallToastProps = (
  | {
      variant?: undefined;
    }
  | {
      variant: 'icon';
      icon?: JSX.Element;
    }
  | {
      variant: 'image';
      imgSrc: string;
    }
  | {
      variant: 'timer';
      onFinish?: () => void;
      endDate: number;
    }
) &
  SharedProps &
  ToastOptions;

/**
 * Method to call the Toast with default icons
 */
export const toast = ({ type, ...props }: CallToastProps) => {
  const defaultIcons = {
    error: <InfoOutline />,
    default: <InfoOutline />,
    primary: <InfoOutline />,
    success: <Check />,
    warning: <FaceSad />,
  };

  if (
    props.variant === undefined ||
    (props.variant === 'icon' && props.icon === undefined)
  ) {
    const propsWithDefault: SharedProps & ToastVariantType = {
      ...props,
      type,
      variant: 'icon',
      icon: defaultIcons[type],
    };

    return toastify.toast(<ToastBase {...propsWithDefault} />, {
      hideProgressBar: true,
      delay: 0,
      closeButton: false,
      closeOnClick: false,
      position: 'bottom-right',

      ...props,
    });
  }

  return toastify.toast(<ToastBase type={type} {...props} />, {
    hideProgressBar: true,
    delay: 0,
    closeButton: false,
    closeOnClick: false,
    position: 'bottom-right',

    ...props,
  });
};
