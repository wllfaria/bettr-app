import { Text } from 'components/Text';

import * as S from './styles';

type FormErrorProps = {
  message: string;
};

export function FormError({ message }: FormErrorProps) {
  return (
    <S.ErrorBox>
      <Text color="alert">{message}</Text>
    </S.ErrorBox>
  );
}
