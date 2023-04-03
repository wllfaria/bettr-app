import { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import { ThemeProvider } from 'styled-components';

import { darkTheme } from 'themes/darkTheme';
import { lightTheme } from 'themes/lightTheme';

import { AuthRouter } from 'routers/AuthRouter';

function App() {
  const [currentTheme] = useState('light');
  return (
    <NavigationContainer>
      <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
        <AuthRouter />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default registerRootComponent(App);
