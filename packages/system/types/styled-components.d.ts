import '@nd-ui/system';

import { Theme as NdTheme } from '@nd-ui/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends NdTheme {}
}
