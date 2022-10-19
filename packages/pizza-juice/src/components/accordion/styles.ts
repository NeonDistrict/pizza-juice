import { styled, keyframes } from '../../system';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Box } from '../box';

const slideDown = keyframes({
  from: { h: 0 },
  to: { h: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
  from: { h: 'var(--radix-accordion-content-height)' },
  to: { h: 0 },
});

export const Accordion = styled(AccordionPrimitive.Root, {
  w: '$full',
  color: '$white',
});

export const AccordionItem = styled(AccordionPrimitive.Item, {
  overflow: 'hidden',
  bg: '$grey-900',
  border: '1px solid $grey-700',
  mt: '$4',

  '&:first-child': {
    mt: 0,
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    bs: '0 0 0 2px $grey-700',
  },
});

export const AccordionHeader = styled(AccordionPrimitive.Header, {
  all: 'unset',
  d: 'flex',
  fontWeight: '$medium',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
});

export const Wrapper = styled(Box, {
  // reset
  all: 'unset',
  fontFamily: 'inherit',

  d: 'flex',
  flex: 1,
  align: 'center',
  justify: 'space-between',
  h: 64,
  px: '$6',
  bg: '$grey-900',
  transition: 'transform 0.2s ease-in-out',

  svg: {
    color: '$pink-500',
    transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',

    '[data-state=open] &': {
      transform: 'rotate(180deg)',
    },
  },
});

export const Trigger = styled(AccordionPrimitive.Trigger, {
  // reset
  all: 'unset',
  fontFamily: 'inherit',

  bg: '$grey-900',
  cursor: 'pointer',
  d: 'flex',
  flex: 1,
  align: 'center',
});

export const Content = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  color: 'CurrentColor',

  '&[data-state="open"]': {
    animation: `${slideDown} 0.2s cubic-bezier(0.87, 0, 0.13, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${slideUp} 0.2s cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

export const ContentPadding = styled('div', {
  p: '0 $6 $4 $6',
});
