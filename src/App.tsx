import './i18n/config';

import { useCallback } from 'react';

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
import { useColorScheme } from 'react-native';
import * as Sentry from 'sentry-expo';
import { ThemeProvider } from 'styled-components';

import { themes } from 'themes';

import { AuthState } from 'contexts/AuthContext';

import { Router } from 'routers/Router';

Sentry.init({
  dsn: 'https://a29c4049ee68431e97b1c347a56fd085@o4504969005498368.ingest.sentry.io/4504969007464448',
  enableInExpoDevelopment: true,
  debug: true,
});

SplashScreen.preventAutoHideAsync();

function App() {
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme as 'light' | 'dark'] || themes.dark;
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
        <ThemeProvider theme={theme}>
          <AuthState>
            <Router />
          </AuthState>
        </ThemeProvider>
      </NavigationContainer>
    </View>
  );
}

export default registerRootComponent(App);
