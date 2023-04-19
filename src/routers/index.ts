export type RouterProps = {
  isAuthenticated?: boolean;
};

export enum AuthRoutes {
  Login = 'Login',
  Register = 'Register',
  RecoverPassword = 'RecoverPassword',
}

export enum AppRoutes {
  Bankrolls = 'Bankrolls',
}

export type AuthRouterParamList = {
  [AuthRoutes.Login]: undefined;
  [AuthRoutes.Register]: undefined;
  [AuthRoutes.RecoverPassword]: undefined;
};

export type AppRouterParamList = {
  [AppRoutes.Bankrolls]: undefined;
};
