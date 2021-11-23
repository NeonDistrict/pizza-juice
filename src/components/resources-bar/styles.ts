import { styled } from '../../system';

export const Wrapper = styled('div', {
  d: 'inline-flex',
  gap: '$3',
});

export const Item = styled('div', {
  d: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$2',
  fontSize: '$md',

  '@md': {
    gap: '$4',
    fontSize: '$2xl',
  },
});

export const Text = styled('span', {
  color: '$grey-600',
  textTransform: 'uppercase',
  fontSize: '$sm',
  letterSpacing: '0.03em',
  fontWeight: '$medium',
  flexWrap: 'nowrap',
  '@md': {
    fontSize: '$md',
  },
});

export const Separator = styled('hr', {
  height: '100%',
  border: '1px solid $grey-700',
  background: '$grey-700',
});
