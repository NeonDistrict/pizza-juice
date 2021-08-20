import { Breadcrumb } from 'semantic-ui-react';
import styled, { css } from 'styled-components';

type ActiveSection = typeof Breadcrumb.Section & { active?: boolean };
type ActiveDivider = typeof Breadcrumb.Divider & { active?: boolean };

export const StyledGroup = styled(Breadcrumb)`
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.13125rem;
`;

export const StyledSection = styled<ActiveSection>(Breadcrumb.Section)`
  font-size: 14px;
  color: ${p => p.theme.lightGrey};
  ${p =>
    p.active &&
    css`
      color: ${p => p.theme.white} !important;
      font-weight: 600 !important;
    `}
`;

export const StyledDivider = styled<ActiveDivider>(Breadcrumb.Divider)`
  color: ${p => p.theme.lightGrey} !important;
  font-size: 14px !important;
  margin-left: 6px !important;
  margin-right: 4px !important;
  opacity: unset !important;
  ${p =>
    p.active &&
    css`
      color: ${p => p.theme.white} !important;
      margin-left: 8px !important;
      margin-right: 6px !important;
    `}
`;
