import { styled } from '../../../system';

import {
  ListboxButton,
  ListboxInput,
  ListboxOption,
  ListboxList,
  ListboxPopover,
} from '@reach/listbox';

import * as baseStyles from '../styles';

export const Wrapper = styled('div');

export const SelectWrapper = styled(ListboxInput, {
  ...baseStyles.SelectWrapper,
});

export const Select = styled(ListboxButton, {
  ...baseStyles.Select,

  '+ span': {
    bg: 'red',
  },

  '&[aria-expanded="true"]': {
    borderColor: '$teal-500',
  },

  '&[aria-disabled="true"]': {
    color: '$grey-700',
    borderColor: '$grey-700',
    cursor: 'not-allowed',

    '& + svg': {
      color: '$grey-700',
    },
  },
});

export const Popover = styled(ListboxPopover, {
  color: '$white',
  minWidth: 'min-content',
});

export const List = styled(ListboxList, {
  p: '$1',
  bg: '$grey-800',
});

export const Option = styled(ListboxOption, {
  ...baseStyles.Option,

  /* styles for all listbox options */
  '&[data-reach-listbox-option]': {},

  /* styles for the option matching the current value of the input */
  '&[data-current-selected]': {
    color: '$pink-500',
  },

  /* styles for the option matching the user's navigation selection */
  '&[data-current-nav]': {
    color: '$pink-500',
    bg: '$grey-700',
  },

  /* styles for disabled listbox options */
  '&[aria-disabled="true"]': {
    color: '$green-500',
  },
});

export const Label = styled('label', {
  ...baseStyles.Label,
});

export const Hint = styled('small', {
  ...baseStyles.Hint,
});

export const Error = styled('div', {
  ...baseStyles.Error,
});
