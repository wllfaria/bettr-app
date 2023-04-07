export type RouterProps = {
  isAuthenticated?: boolean;
};

export enum AuthRoutes {
  Login = 'Login',
  Register = 'Register',
  RecoverPassword = 'RecoverPassword',
}

export type AuthRouterParamList = {
  [AuthRoutes.Login]: undefined;
  [AuthRoutes.Register]: undefined;
  [AuthRoutes.RecoverPassword]: undefined;
};
