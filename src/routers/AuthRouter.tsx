import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginPage } from 'pages/LoginPage';

export enum AuthRoutes {
  Login = 'Login',
}

export type AuthRouterParamList = {
  [AuthRoutes.Login]: undefined;
};

const Stack = createNativeStackNavigator<AuthRouterParamList>();

export function AuthRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AuthRoutes.Login} component={LoginPage} />
    </Stack.Navigator>
  );
}
