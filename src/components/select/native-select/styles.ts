import { styled } from '../../../system';

import { ChevronDownIcon } from '../icon';

import * as styles from '../styles';

export const Wrapper = styled('div');

export const SelectWrapper = styled('div', {
  ...styles.SelectWrapper,
});

export const Select = styled('select', {
  ...styles.Select,
  pr: '$8',

  '&:focus-within': {
    borderColor: '$teal-500',
  },

  '&:disabled': {
    color: '$grey-700',
    borderColor: '$grey-700',
    cursor: 'not-allowed',

    '& + svg': {
      color: '$grey-700',
    },
  },
});

export const ArrowIcon = styled(ChevronDownIcon, {
  position: 'absolute',
  d: 'flex',
  pointerEvents: 'none',
  right: '$4',
  color: '$white',
});

export const Option = styled('option', {
  ...styles.Option,
});

export const Label = styled('label', {
  ...styles.Label,
});

export const Hint = styled('small', {
  ...styles.Hint,
});

export const Error = styled('div', {
  ...styles.Error,
});
