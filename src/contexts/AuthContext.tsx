import {
  Children,
  isValidElement,
  cloneElement,
  ReactElement,
  useEffect,
} from 'react';
import { createContext, useReducer } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { RouterProps } from 'routers/index';

import { ApiRoutes } from 'types/apiRoutes';
import { AsyncStorageObjects } from 'types/asyncStorage';
import { UserResponse } from 'types/responses/userResponse';
import { User } from 'types/user';

import api from 'services/api';
import { addBreadcrumb, trackEvent } from 'services/sentry';

type AuthStateProps = {
  children: ReactElement<RouterProps>;
};

type AuthState = {
  token?: string;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  user?: User;
};

enum ActionType {
  Login = 'login',
  Logout = 'logout',
}

type AuthAction = {
  type: ActionType;
  payload?: {
    token: string;
    user: User;
  };
};

type ReducerHandler = {
  [key in ActionType]: () => AuthState;
};

const initialState: AuthState = {
  token: undefined,
  login: async () => undefined,
  logout: async () => undefined,
  isAuthenticated: false,
  user: undefined,
};

export const AuthContext = createContext<AuthState>(initialState);

const reducer = (state: AuthState, action: AuthAction) => {
  const reducerHandler: ReducerHandler = {
    login: () => ({
      ...state,
      token: action.payload?.token,
      user: action.payload?.user,
      isAuthenticated: true,
    }),
    logout: () => ({
      ...state,
      token: undefined,
      user: undefined,
      isAuthenticated: false,
    }),
  };

  return reducerHandler[action.type]();
};

export function AuthState({ children }: AuthStateProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (token: string) => {
    try {
      await AsyncStorage.setItem(AsyncStorageObjects.UserToken, token);
      api.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      });
      const response = await api.get<UserResponse>(ApiRoutes.UserData);
      dispatch({
        type: ActionType.Login,
        payload: { token, user: response.data.data },
      });
      addBreadcrumb({
        category: 'auth',
        message: `Authenticated user ${response.data.data.email}`,
      });
      trackEvent({ message: 'authentication' });
    } catch (e) {
      console.log(e);
    }
  };

  const logout = async () => {
    dispatch({ type: ActionType.Logout });
    await AsyncStorage.removeItem(AsyncStorageObjects.UserToken);
  };

  const getAuthenticatedUser = async () => {
    const token = await AsyncStorage.getItem(AsyncStorageObjects.UserToken);
    if (!token) return;
    await login(token);
  };

  useEffect(() => {
    getAuthenticatedUser();
  }, []);

  const childrenWithProps = Children.map(
    children,
    (child: ReactElement<RouterProps>) => {
      if (isValidElement(child))
        return cloneElement(child, { isAuthenticated: state.isAuthenticated });
      return child;
    },
  );

  const contextValue: AuthState = {
    ...state,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {childrenWithProps}
    </AuthContext.Provider>
  );
}
