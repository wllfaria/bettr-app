import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginPage } from 'pages/LoginPage';

import { AuthRouterParamList, AuthRoutes, RouterProps } from '.';

const Stack = createNativeStackNavigator<AuthRouterParamList>();

function AuthRouter() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AuthRoutes.Login} component={LoginPage} />
    </Stack.Navigator>
  );
}

function AppRouter() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AuthRoutes.Login} component={LoginPage} />
    </Stack.Navigator>
  );
}

export function Router({ isAuthenticated }: RouterProps) {
  return <>{isAuthenticated ? <AppRouter /> : <AuthRouter />}</>;
}
