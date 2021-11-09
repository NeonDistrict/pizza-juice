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

  '[data-reach-listbox-arrow=""]': {
    position: 'relative',
    top: 2,
  },
});

export const Button = styled(ListboxButton, {
  ...baseStyles.Button,

  '&[aria-expanded="true"]': {
    borderColor: '$teal1',
  },

  '&[aria-disabled="true"]': {
    color: '$grey4',
    borderColor: '$grey4',
    cursor: 'not-allowed',

    '& + svg': {
      color: '$grey4',
    },
  },
});

export const Popover = styled(ListboxPopover, {
  ...baseStyles.Popover,
});

export const List = styled(ListboxList, {
  ...baseStyles.List,
});

export const Option = styled(ListboxOption, {
  ...baseStyles.Option,

  /* styles for all listbox options */
  '&[data-reach-listbox-option]': {},

  /* styles for the option matching the current value of the input */
  '&[data-current-selected]': {
    color: '$pink1',
  },

  /* styles for the option matching the user's navigation selection */
  '&[data-current-nav]': {
    color: '$pink1',
    bg: '$grey4',
  },

  /* styles for disabled listbox options */
  '&[aria-disabled="true"]': {
    color: '$green1',
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
