import { useTheme } from 'styled-components/native';

import { TextStyles } from 'components/Text';

import * as S from './styles';

type InputProps = {
  label?: string;
  required?: boolean;
  supportText?: string;
  errorText?: string;
};

export function Input({ label, required, supportText, errorText }: InputProps) {
  const theme = useTheme();

  return (
    <>
      {label && (
        <S.LabelContainer>
          <S.Label textType={TextStyles.subtitleAlt}>{label}</S.Label>
          {required && <S.FieldRequired>*</S.FieldRequired>}
        </S.LabelContainer>
      )}
      <S.Input
        placeholder="test"
        placeholderTextColor={theme.colors.text.placeholder}
      />
      {supportText && (
        <S.LabelContainer>
          <S.SupportText textType={TextStyles.capture} color="description">
            {supportText}
          </S.SupportText>
        </S.LabelContainer>
      )}
      {errorText && (
        <S.LabelContainer>
          <S.ErrorText textType={TextStyles.capture} color="alert">
            {supportText}
          </S.ErrorText>
        </S.LabelContainer>
      )}
    </>
  );
}
