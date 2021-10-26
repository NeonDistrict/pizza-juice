import '@neon-district/system';

import { Theme as NdTheme } from '@neon-district/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends NdTheme {}
}
