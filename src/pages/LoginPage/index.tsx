import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AuthRouterParamList, AuthRoutes } from 'routers/AuthRouter';

type LoginPageProps = NativeStackScreenProps<
  AuthRouterParamList,
  AuthRoutes.Login
>;

export function LoginPage(_: LoginPageProps) {
  return <></>;
}
