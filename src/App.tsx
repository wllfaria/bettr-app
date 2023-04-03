import { useState } from 'react';

import { registerRootComponent } from 'expo';
import { ThemeProvider } from 'styled-components';

import { darkTheme } from 'themes/darkTheme';
import { lightTheme } from 'themes/lightTheme';

function App() {
  const [currentTheme] = useState('light');
  return (
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      <></>
    </ThemeProvider>
  );
}

export default registerRootComponent(App);
