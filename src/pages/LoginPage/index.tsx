import { useContext, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AxiosError } from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import * as yup from 'yup';

import { AuthContext } from 'contexts/AuthContext';

import { Button, ButtonVariants } from 'components/Button';
import { FormError } from 'components/FormError';
import { Input } from 'components/Input';
import { KBDAvoidingView } from 'components/KBDAvoidingView';
import { Text, TextStyles } from 'components/Text';

import { AuthRouterParamList, AuthRoutes } from 'routers/index';

import { ApiRoutes } from 'types/apiRoutes';
import { LoginResponse } from 'types/responses/loginResponse';

import api from 'services/api';
import { trackEvent } from 'services/sentry';

import * as S from './styles';

type LoginPageProps = NativeStackScreenProps<
  AuthRouterParamList,
  AuthRoutes.Login
>;

type LoginDto = {
  username: string;
  password: string;
};

const loginSchema = yup.object({
  username: yup.string().max(24).min(3).required(),
  password: yup.string().min(8).max(500).required(),
});

export function LoginPage({ navigation }: LoginPageProps) {
  const { login } = useContext(AuthContext);
  const { t } = useTranslation(['Login']);
  const [loginError, setLoginError] = useState('');
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDto>({ resolver: yupResolver(loginSchema) });

  const onSubmit = async (data: LoginDto) => {
    try {
      trackEvent({ message: 'Login Screen: Primary button pressed' });
      const response = await api.post<LoginResponse>(ApiRoutes.Login, data);
      await login(response.data.data.accessToken);
    } catch (e) {
      if (e instanceof AxiosError)
        console.log(e.message, e.name, e.request, e.response);
      setLoginError(`Login:errors.${e.response?.data.error.name}`);
    }
  };

  return (
    <KBDAvoidingView>
      <S.LoginContainer>
        <View>
          <Text textType={TextStyles.largeText}>{t('Login:title')}</Text>
        </View>
        <S.FormContainer>
          {!!loginError && <FormError message={t(loginError)} />}
          <Controller
            name="username"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Input
                label={t('Login:username_input.label')}
                value={value}
                onChangeText={onChange}
                hasError={!!errors.username?.message || !!loginError}
                errorText={
                  errors.username &&
                  t(`Login:username_input.errors.${errors.username.type}`)
                }
                required
                placeholder={t('Login:username_input.placeholder')}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Input
                label={t('Login:password_input.label')}
                onChangeText={onChange}
                secureTextEntry
                value={value}
                hasError={!!errors.password?.message || !!loginError}
                errorText={
                  errors.password?.message &&
                  t(`Login:password_input.errors.${errors.password?.type}`)
                }
                required
                placeholder={t('Login:password_input.placeholder')}
              />
            )}
          />
        </S.FormContainer>

        <S.ButtonContainer>
          <Button onPress={handleSubmit(onSubmit)}>
            {t('Login:primary_button')}
          </Button>
        </S.ButtonContainer>
        <S.ButtonContainer>
          <Button
            variant={ButtonVariants.Secondary}
            onPress={() => navigation.push(AuthRoutes.Register)}
          >
            {t('Login:secondary_button')}
          </Button>
        </S.ButtonContainer>
        <S.ButtonContainer>
          <Button
            variant={ButtonVariants.Tertiary}
            onPress={() => navigation.push(AuthRoutes.RecoverPassword)}
          >
            {t('Login:tertiary_button')}
          </Button>
        </S.ButtonContainer>
      </S.LoginContainer>
    </KBDAvoidingView>
  );
}
