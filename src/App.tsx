import { useCallback, useState } from 'react';

import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_700Bold,
  NotoSans_900Black,
} from '@expo-google-fonts/noto-sans';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { darkTheme } from 'themes/darkTheme';
import { lightTheme } from 'themes/lightTheme';

import { AuthRouter } from 'routers/AuthRouter';

SplashScreen.preventAutoHideAsync();

function App() {
  const [currentTheme] = useState('light');
  const [fontsLoaded] = useFonts({
    NotoSans_400Regular,
    NotoSans_700Bold,
    NotoSans_900Black,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <ThemeProvider
          theme={currentTheme === 'light' ? lightTheme : darkTheme}
        >
          <AuthRouter />
        </ThemeProvider>
      </NavigationContainer>
    </View>
  );
}

export default registerRootComponent(App);
