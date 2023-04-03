import { Text, TextStyles } from 'components/Text';

import * as S from './styles';

export enum ButtonVariants {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

type ButtonVariantMap = {
  [key in ButtonVariants]: JSX.Element;
};

type ButtonProps = {
  variant?: ButtonVariants;
  disabled?: boolean;
  children: React.ReactNode;
  onPress: () => void;
};

export function Button({
  variant = ButtonVariants.Primary,
  disabled,
  children,
  onPress,
}: ButtonProps) {
  const getButtonVariant = (variant: ButtonVariants) => {
    const buttonVariantMap: ButtonVariantMap = {
      primary: (
        <S.PrimaryButton disabled={disabled} onPress={onPress}>
          <Text textType={TextStyles.button} color="onFill">
            {children}
          </Text>
        </S.PrimaryButton>
      ),
      secondary: (
        <S.SecondaryButton disabled={disabled} onPress={onPress}>
          <Text textType={TextStyles.button} color="link">
            {children}
          </Text>
        </S.SecondaryButton>
      ),
      tertiary: (
        <S.TertiaryButton disabled={disabled} onPress={onPress}>
          <Text textType={TextStyles.buttonAlt} color="link">
            {children}
          </Text>
        </S.TertiaryButton>
      ),
    };

    return buttonVariantMap[variant];
  };

  return getButtonVariant(variant);
}
