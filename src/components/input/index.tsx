import React, {
  InputHTMLAttributes,
  useCallback,
  useRef,
  forwardRef,
  useState,
} from 'react';

import { CSS } from '../../system';

import { Flex } from '../flex';

import * as S from './styles';

export type InputProps = {
  /**
   * Input label
   */
  label?: string;
  /**
   * Show input message
   */
  hint?: string | string[];
  /**
   * Show input error
   */
  error?: string | string[];
  /**
   *
   * @default "default"
   */
  variant?: 'default' | 'line';
  /**
   * Left icon
   */
  leftIcon?: React.ReactNode;
  /**
   * Right icon
   */
  rightIcon?: React.ReactNode;
  /**
   * Enables the input to be cleared
   **/
  cleanable?: boolean;
  /**
   * CSS properties
   */
  css?: CSS;
} & InputHTMLAttributes<HTMLInputElement>;

/**
 * Input component
 *
 * @description is a component that is used to get user input in a text field.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [hasValue, setHasValue] = useState(false);
  const innerRef = useRef<HTMLInputElement | null>();

  const {
    label,
    hint,
    error,
    disabled,
    leftIcon,
    rightIcon,
    cleanable,
    css,
    onChange,
    ...rest
  } = props;

  if (!!rightIcon && cleanable) {
    throw new Error("You can't use both 'rightIcon' and 'cleanable' props");
  }

  const setMultipleRefs = useCallback(
    (element: HTMLInputElement) => {
      innerRef.current = element;

      if (typeof ref === 'function') {
        ref(element);
      }

      if (ref && typeof ref !== 'function') {
        ref.current = element;
      }
    },
    [ref, innerRef],
  );

  const handleChange = useCallback(
    (event) => {
      if (cleanable) {
        setHasValue(!!event.target.value);
      }

      onChange && onChange(event);
    },
    [cleanable, onChange],
  );

  const handleClean = useCallback(() => {
    if (innerRef.current) {
      innerRef.current.value = '';
    }
  }, []);

  return (
    <S.Wrapper css={css}>
      {label && <S.Label disabled={disabled}>{label}</S.Label>}

      <Flex css={{ position: 'relative' }}>
        {!!leftIcon && <S.LeftIcon>{leftIcon}</S.LeftIcon>}

        <S.Input
          ref={setMultipleRefs}
          disabled={disabled}
          leftIcon={!!leftIcon}
          rightIcon={!!rightIcon}
          error={!!error}
          onChange={handleChange}
          {...rest}
        />

        {!!rightIcon && !cleanable && <S.RightIcon>{rightIcon}</S.RightIcon>}
        {cleanable && hasValue && (
          <S.RightIcon as="button" cleanable={cleanable} onClick={handleClean}>
            <S.CleanIcon />
          </S.RightIcon>
        )}
      </Flex>

      <S.Error>{error}</S.Error>

      <S.Message disabled={disabled}>{hint}</S.Message>
    </S.Wrapper>
  );
});

Input.displayName = 'Input';
