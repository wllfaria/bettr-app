import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BankrollsPage } from 'pages/Bankrolls';
import { LoginPage } from 'pages/LoginPage';

import {
  AppRouterParamList,
  AppRoutes,
  AuthRouterParamList,
  AuthRoutes,
  RouterProps,
} from '.';

const AuthStack = createNativeStackNavigator<AuthRouterParamList>();
const AppStack = createNativeStackNavigator<AppRouterParamList>();

function AuthRouter() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={AuthRoutes.Login} component={LoginPage} />
    </AuthStack.Navigator>
  );
}

function AppRouter() {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name={AppRoutes.Bankrolls} component={BankrollsPage} />
    </AppStack.Navigator>
  );
}

export function Router({ isAuthenticated }: RouterProps) {
  return <>{isAuthenticated ? <AppRouter /> : <AuthRouter />}</>;
}
