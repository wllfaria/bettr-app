import { DefaultTheme } from 'styled-components';

import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';

export const themes: { [key: string]: DefaultTheme } = {
  dark: darkTheme,
  light: lightTheme,
};
