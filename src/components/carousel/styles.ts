import styled from 'styled-components';

export const Wrapper = styled('section')(({ theme }) => ({
  '.slick-track, .slick-list': {
    display: 'flex'
  },

  '.slick-list': {
    margin: 0 - theme.spaces[4]
  },

  '.slick-prev': {
    left: -theme.spaces[4]
  },

  '.slick-next': {
    right: -theme.spaces[4]
  },

  '.slick-prev.slick-disabled, .slick-next.slick-disabled': {
    visibility: 'hidden'
  },

  '.slick-prev, .slick-next': {
    bottom: -17
  },

  '.slick-dots': {
    listStyle: 'none',
    display: 'flex !important',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spaces[8],

    li: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: theme.spaces[2],
      height: theme.spaces[2],
      margin: `0 ${theme.spaces[1]}`,
      background: theme.colors.pink1,
      borderRadius: theme.radii.full,
      cursor: 'pointer',
      transition: `box-shadow ${theme.durations.fast}`,

      '&.slick-active': {
        background: theme.colors.pink1
      },

      button: {
        opacity: 0,
        width: theme.spaces[2],
        height: theme.spaces[2],
        cursor: 'pointer'
      }
    }
  }
}));

export const Item = styled('article')(({ theme }) => ({
  position: 'relative',
  height: 190,
  display: 'flex',
  justifyContent: 'center',
  flex: '1 0 auto',
  margin: `0 ${theme.spaces[4]}`,
  padding: theme.spaces[8],
  border: `1px solid ${theme.colors.white}`,

  button: {
    position: 'absolute',
    bottom: 50,
    textTransform: 'uppercase'
  },

  img: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    objectFit: 'cover'
  }
}));
