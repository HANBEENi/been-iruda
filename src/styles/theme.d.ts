// src/styles/styled.d.ts

// =======================================
// styled-components 타입 연결
// =======================================

import 'styled-components';
import { Theme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
