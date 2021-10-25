import '@district-ui/system';

import { Theme as NdTheme } from '@district-ui/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends NdTheme {}
}
