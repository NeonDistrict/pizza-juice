import { Tab } from 'semantic-ui-react';
import styled from 'styled-components';

export const StyledTab = styled(Tab)`
  .ui.attached.tabular.menu {
    border-bottom: 1px solid #ffffff;
    .item {
      color: ${p => p.theme.lightGrey};
      font-weight: 700;
      text-transform: uppercase;
    }
  }

  .ui.tabular.menu .active.item {
    background-color: transparent;
    border-radius: 0px !important;
    border: 1px solid #ffffff;
    border-bottom: 1px solid black !important;
    padding: 0.4375rem 44px;
    color: #ffffff;
    font-size: 0.9375rem; // 15px -> TODO: change font size from body to 1rem = 10px
    font-weight: 700;
    text-transform: uppercase;
  }
`;
