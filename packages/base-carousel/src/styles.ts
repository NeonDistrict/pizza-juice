import styled from '@neon-district/system';

export const Wrapper = styled('section')({
  '.slick-slider': {
    position: 'relative',
    display: 'block',
    userSelect: 'none',
    touchAction: 'pan-y'
  },

  '.slick-list': {
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
    margin: 0,
    padding: 0
  },

  '.slick-list:focus': {
    outline: 'none'
  },

  '.slick-list.dragging': {
    cursor: 'hand'
  },

  '.slick-slider .slick-track, .slick-slider .slick-list': {
    transform: 'translate3d(0, 0, 0)'
  },

  '.slick-track': {
    position: 'relative',
    top: 0,
    left: 0,
    display: 'block'
  },

  '.slick-track:before, .slick-track:after': {
    display: 'table',
    content: ''
  },

  '.slick-track:after': {
    clear: 'both'
  },

  '.slick-loading .slick-track': {
    visibility: 'hidden'
  },

  '.slick-slide': {
    display: 'none',
    float: 'left',
    height: '100%',
    minHeight: '1px'
  },

  '[dir="rtl"] .slick-slide': {
    float: 'right'
  },

  '.slick-slide img': {
    display: 'block'
  },

  '.slick-slide.slick-loading img': {
    display: 'none'
  },

  '.slick-slide.dragging img': {
    pointerEvents: 'none'
  },

  '.slick-initialized .slick-slide': {
    display: 'block'
  },

  '.slick-loading .slick-slide': {
    visibility: 'hidden'
  },

  '.slick-vertical .slick-slide': {
    display: 'block',
    height: 'auto',
    border: '1px solid transparent'
  },

  '.slick-arrow.slick-hidden': {
    display: 'none'
  }
});

export const Arrow = styled('button')(({ theme }) => ({
  width: 40,
  height: 40,
  margin: `0 ${theme.spaces[4]}`,
  position: 'absolute',
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: theme.colors.grey4,
  color: theme.colors.white,
  border: 'none',
  borderRadius: theme.radii.full,
  cursor: 'pointer',
  transition: theme.durations.fast,

  '&:hover': {
    background: theme.colors.grey3
  }
}));
