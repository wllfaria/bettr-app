export default {
  Login: {
    title: 'Login',
    errors: {
      UnauthorizedError: 'Nome de usuário ou Senha inválidos',
    },
    username_input: {
      placeholder: 'johndoe',
      label: 'Nome de usuário',
      errors: {
        min: 'O nome de usuário deve ter pelo menos 3 caracteres',
        max: 'O nome de usuário deve ter no máximo 24 caracteres',
        optionality: 'O nome de usuário é obrigatório',
      },
    },
    password_input: {
      placeholder: 'Sua melhor senha',
      label: 'Senha',
      errors: {
        min: 'A senha deve ter pelo menos 8 caracteres',
        max: 'A senha deve ter no máximo 500 caracteres',
        optionality: 'A senha é obrigatória',
      },
    },
    primary_button: 'Entrar',
    secondary_button: 'Registrar',
    tertiary_button: 'Esqueci minha senha',
  },
};
