import styled from '@neon-district/system';

import { StepItemProps } from '.';

export const Main = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  textTransform: 'uppercase',
  width: theme.sizes.full,
  fontWeight: theme.fontWeights.bold,
  letterSpacing: '0.8px',

  [`@media only screen and (max-width: 768px)`]: {
    flexWrap: 'wrap'
  }
}));

type StepsItemWrapperProps = Pick<StepItemProps, 'active'>;

export const StepsItemWrapper = styled('div')<StepsItemWrapperProps>(
  ({ theme, active }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: `1px solid ${theme.colors.white}`,
    color: active ? theme.colors.white : theme.colors.grey4,

    '&:last-of-type': {
      svg: {
        display: 'none'
      }
    }
  })
);

export const StepsItem = styled('div')<Pick<StepItemProps, 'active'>>(
  ({ theme, active }) => ({
    padding: '0.41rem',
    width: theme.sizes.full,

    ...(active
      ? {
          background: theme.colors.white,
          color: theme.colors.grey5
        }
      : {
          background: theme.colors.grey4,
          color: theme.colors.grey3
        })
  })
);
