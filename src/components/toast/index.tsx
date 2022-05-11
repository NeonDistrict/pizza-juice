import React from 'react';

import * as toastify from 'react-toastify';

import { forwardRef } from '../../utils';

import { Box } from '../box';
import { Flex } from '../flex';
import { Text } from '../text';
import { Button } from '../button';
import { Stack } from '../stack';

import {
  CheckSolid,
  InfoSolid,
  CloseSolid,
  FlagSolid,
  Close,
} from '../../icons';

import * as S from './styles';

export type ToastContainerProps = toastify.ToastContainerProps;

/**
 * ToastContainer
 *
 * @description Used to render the Toasts in your application.
 */
export const ToastContainer = forwardRef<ToastContainerProps, 'div'>(
  (props, ref) => {
    return <S.Wrapper ref={ref} {...props} />;
  },
);

type SharedProps = {
  title: string;
  message: string;
  closable?: boolean;
  variant?: 'minimal' | 'actions';
  buttons?: React.ReactNode | React.ReactNode[];
};

type ToastCardProps = {
  toastProps?: toastify.ToastOptions;
  closeToast?: () => void;
} & SharedProps;

/**
 * Custom styled Toast to be displayed in the ToastContainer
 */
const ToastCard = ({ toastProps, closeToast, ...props }: ToastCardProps) => {
  const { title, message, closable, variant = 'minimal' } = props;

  const iconType = {
    default: InfoSolid,
    success: CheckSolid,
    error: CloseSolid,
    warning: InfoSolid,
    info: FlagSolid,
  };

  if (variant === 'minimal') {
    return (
      <Flex
        justify={closable ? 'between' : 'start'}
        align="center"
        gap={3}
        css={{ minW: 170, h: 40, p: '$3' }}
      >
        {React.createElement(iconType[toastProps?.type || 'default'], {
          size: 20,
        })}

        <Text size="sm" transform="normal">
          {message}
        </Text>

        {closable && (
          <Box as="button" onClick={closeToast} css={{ all: 'unset' }}>
            <Close css={{ size: 20 }} />
          </Box>
        )}
      </Flex>
    );
  }

  return (
    <Flex
      justify={closable ? 'between' : 'start'}
      align="start"
      gap={3}
      css={{ minW: 300, px: '$3', py: '$4' }}
    >
      {React.createElement(iconType[toastProps?.type || 'default'], {
        size: 20,
      })}

      <Box>
        <Text weight="medium">{title}</Text>

        <Text css={{ mt: '$1' }}>{message}</Text>

        <Stack gap={2} css={{ mt: '$2' }}>
          <Button>Action</Button>

          <Button variant="outlined">Action</Button>
        </Stack>
      </Box>

      {closable && (
        <Box as="button" onClick={closeToast} css={{ all: 'unset' }}>
          <Close css={{ size: 20 }} />
        </Box>
      )}
    </Flex>
  );
};

export type ToastMethodProps = SharedProps &
  Omit<
    toastify.ToastOptions,
    'icon' | 'theme' | 'closeButton' | 'hideProgressBar'
  >;

/**
 * Method to call the Toast Card
 */
export const toast = (props: ToastMethodProps) => {
  return toastify.toast(<ToastCard {...props} />, {
    icon: false,
    hideProgressBar: true,
    delay: 0,
    closeButton: false,
    closeOnClick: false,
    ...props,
  });
};
