export const SelectWrapper = {
  position: 'relative',
  d: 'flex',
  align: 'center',
};

export const Select = {
  // reset
  appearance: 'none',
  fontFamily: 'inherit',

  w: '$full',
  cursor: 'pointer',
  color: '$white',
  align: 'center',
  d: 'inline-flex',
  justify: 'space-between',
  px: '$4',
  userSelect: 'none',
  fontWeight: '$medium',
  border: '1px solid',

  '&:hover': {
    borderColor: '$pink1',
  },

  /**
   * Variants
   */
  variants: {
    /**
     * Size variant
     */
    size: {
      default: {
        h: 40,
        fontSize: '$md',
      },
      small: {
        h: 32,
        fontSize: '$sm',
      },
      tiny: {
        h: 24,
        fontSize: '$sm',
      },
    },
    variant: {
      solid: {
        bg: '#080808',
        borderColor: 'transparent',
      },
      outline: {
        bg: '$black',
        borderColor: '$grey3',
      },
    },
  },

  /**
   * Default variants
   */
  defaultVariants: {
    size: 'default',
    variant: 'outline',
  },
};

export const Option = {
  d: 'block',
  m: 0,
  p: '$2 $6',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  color: '$white',
  cursor: 'pointer',
  fontWeight: '$medium',
  textTransform: 'uppercase',
};

export const Label = {
  d: 'block',
  color: '$white',
  mb: '$1',
  fontWeight: '$medium',
  textTransform: 'uppercase',

  /**
   * Variants
   */
  variants: {
    /**
     * Size variant
     */
    size: {
      default: {
        fontSize: '$md',
      },
      small: {
        fontSize: '$sm',
      },
      tiny: {
        fontSize: '$sm',
      },
    },
  },

  /**
   * Default variants
   */
  defaultVariants: {
    size: 'default',
  },
};

export const Hint = {
  color: '$grey1',
  fontSize: '$xs',
  mt: '5px',
  d: 'block',

  variants: {
    disabled: {
      true: {
        color: '$grey4',
      },
    },
  },
};

export const Error = {
  color: '$red1',
  fontSize: '$xs',
};
