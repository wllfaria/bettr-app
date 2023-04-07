import { useEffect } from 'react';

import { useTheme } from 'styled-components/native';

import { TextStyles } from 'components/Text';

import * as S from './styles';

type InputProps = {
  label?: string | null;
  required?: boolean;
  supportText?: string | null;
  hasError?: boolean;
  errorText?: string | null;
  placeholder?: string | null;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
};

export function Input({
  label,
  placeholder,
  required,
  supportText,
  hasError,
  errorText,
  value,
  onChangeText,
  secureTextEntry,
}: InputProps) {
  const theme = useTheme();

  useEffect(() => {
    console.log(errorText, hasError);
  }, [errorText, hasError]);

  return (
    <>
      {label && (
        <S.LabelContainer>
          <S.Label textType={TextStyles.subtitleAlt}>{label}</S.Label>
          {required && <S.FieldRequired>*</S.FieldRequired>}
        </S.LabelContainer>
      )}
      <S.Input
        placeholder={placeholder as string}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        hasError={hasError}
        value={value}
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
            {errorText}
          </S.ErrorText>
        </S.LabelContainer>
      )}
    </>
  );
}
