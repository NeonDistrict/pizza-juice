import { styled } from '../../system';

export const Wrapper = styled('section', {
  '.slick-slider': {
    position: 'relative',
    d: 'block',
    userSelect: 'none',
    touchAction: 'pan-y',
  },

  '.slick-list': {
    position: 'relative',
    d: 'block',
    overflow: 'hidden',
    m: 0,
    p: 0,
  },

  '.slick-list:focus': {
    outline: 'none',
  },

  '.slick-list.dragging': {
    cursor: 'hand',
  },

  '.slick-slider .slick-track, .slick-slider .slick-list': {
    transform: 'translate3d(0, 0, 0)',
  },

  '.slick-track': {
    position: 'relative',
    top: 0,
    left: 0,
    d: 'block',
  },

  '.slick-track:before, .slick-track:after': {
    d: 'table',
    content: '',
  },

  '.slick-track:after': {
    clear: 'both',
  },

  '.slick-loading .slick-track': {
    visibility: 'hidden',
  },

  '.slick-slide': {
    d: 'none',
    float: 'left',
    h: '100%',
    minH: '1px',
  },

  '[dir="rtl"] .slick-slide': {
    float: 'right',
  },

  '.slick-slide img': {
    d: 'block',
  },

  '.slick-slide.slick-loading img': {
    d: 'none',
  },

  '.slick-slide.dragging img': {
    pointerEvents: 'none',
  },

  '.slick-initialized .slick-slide': {
    d: 'block',
  },

  '.slick-loading .slick-slide': {
    visibility: 'hidden',
  },

  '.slick-vertical .slick-slide': {
    d: 'block',
    h: 'auto',
    border: '1px solid transparent',
  },

  '.slick-arrow.slick-hidden': {
    d: 'none',
  },
});
