import React from 'react';

import * as toastify from 'react-toastify';

import { forwardRef } from '../../utils';

import { Box } from '../box';
import { Flex } from '../flex';
import { Image } from '../image';
import { Text } from '../text';
import { Stack } from '../stack';

import { Close, InfoOutline } from '../../icons';

import * as S from './styles';
import { VariantProps } from 'src/system';
import { Countdown } from '../countdown';
import { BiSad } from 'react-icons/bi';
import { BsCheckLg } from 'react-icons/bs';

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
  type: VariantProps<typeof S.Wrapper>['type'];
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

export type ToastProps = SharedProps &
  (
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
  );

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
            variant="small"
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

export const rawToast = (props: ToastProps, options?: ToastOptions) => {
  return toastify.toast(<ToastBase {...props} />, {
    hideProgressBar: true,
    delay: 0,
    closeButton: false,
    closeOnClick: false,
    position: 'bottom-right',
    icon: false,

    ...options,
  });
};

// TODO: Later we can add a abstraction layer in this function to accept type: 'pizza-slice' | 'achievement' | 'gift'
// So we don't need to pass icons and images all the time.s
// Also, with this layer we can be more specific about the toast position
type CallToastProps = Omit<ToastProps, 'variant'>;

/**
 * Method to call the Toast with default icons
 */
export const toast = (props: CallToastProps, options?: ToastOptions) => {
  const typeString = typeof props.type === 'string' ? props.type : null;

  const defaultIcons = {
    error: <InfoOutline />,
    default: <InfoOutline />,
    primary: <InfoOutline />,
    success: <BsCheckLg />,
    warning: <BiSad />,
  };

  return rawToast(
    {
      ...props,
      variant: 'icon',
      icon: defaultIcons[typeString ?? 'default'],
    },
    options,
  );
};
