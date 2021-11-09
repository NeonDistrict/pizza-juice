import { styled } from '../../system';

export const Wrapper = styled('section', {
  '.slick-track, .slick-list': {
    d: 'flex',
  },

  '.slick-list': {
    mx: -16,
  },

  '.slick-prev': {
    left: -16,
  },

  '.slick-next': {
    right: -16,
  },

  '.slick-prev.slick-disabled, .slick-next.slick-disabled': {
    visibility: 'hidden',
  },

  '.slick-prev, .slick-next': {
    bottom: -17,
  },

  '.slick-dots': {
    listStyle: 'none',
    d: 'flex !important',
    align: 'center',
    justify: 'center',
    mt: '$8',
    p: 0,

    li: {
      d: 'flex',
      align: 'center',
      justify: 'center',
      size: 8,
      m: '0 $1',
      bg: '#311722',
      br: '$full',
      cursor: 'pointer',
      transition: '$fast',

      '&.slick-active': {
        bg: '$pink1',
      },

      button: {
        opacity: 0,
        size: 8,
        cursor: 'pointer',
      },
    },
  },
});

export const Item = styled('article', {
  position: 'relative',
  height: 120,
  d: 'flex',
  justify: 'center',
  flex: '1 0 auto',
  mx: '$4',
  p: '$8',
  border: '1px solid $white',

  button: {
    position: 'absolute',
    bottom: 24,
    textTransform: 'uppercase',
  },
});
