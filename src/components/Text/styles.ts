import styled, { DefaultTheme } from 'styled-components/native';

type TextProps = {
  textStyle: keyof DefaultTheme['textStyles'];
  color: keyof DefaultTheme['colors']['text'];
};

enum FontFamily {
  Regular = 'NotoSans_400Regular',
  Bold = 'NotoSans_700Bold',
  Black = 'NotoSans_900Black',
}

export const LargeText = styled.Text<TextProps>`
  font-family: ${FontFamily.Bold};
  font-size: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontSize};
  font-weight: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontWeight};
  line-height: ${props =>
    props.theme.textStyles[props.textStyle].mobile.lineHeight};
  color: ${props => props.theme.colors.text[props.color]};
`;

export const H1 = styled.Text<TextProps>`
  font-family: ${FontFamily.Bold};
  font-size: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontSize};
  font-weight: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontWeight};
  line-height: ${props =>
    props.theme.textStyles[props.textStyle].mobile.lineHeight};
  color: ${props => props.theme.colors.text[props.color]};
`;

export const H2 = styled.Text<TextProps>`
  font-family: ${FontFamily.Regular};
  font-size: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontSize};
  font-weight: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontWeight};
  line-height: ${props =>
    props.theme.textStyles[props.textStyle].mobile.lineHeight};
  color: ${props => props.theme.colors.text[props.color]};
`;

export const H3 = styled.Text<TextProps>`
  font-family: ${FontFamily.Bold};
  font-size: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontSize};
  font-weight: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontWeight};
  line-height: ${props =>
    props.theme.textStyles[props.textStyle].mobile.lineHeight};
  color: ${props => props.theme.colors.text[props.color]};
`;

export const H4 = styled.Text<TextProps>`
  font-family: ${FontFamily.Bold};
  font-size: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontSize};
  font-weight: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontWeight};
  line-height: ${props =>
    props.theme.textStyles[props.textStyle].mobile.lineHeight};
  color: ${props => props.theme.colors.text[props.color]};
`;

export const H5 = styled.Text<TextProps>`
  font-family: ${FontFamily.Bold};
  font-size: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontSize};
  font-weight: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontWeight};
  line-height: ${props =>
    props.theme.textStyles[props.textStyle].mobile.lineHeight};
  color: ${props => props.theme.colors.text[props.color]};
`;

export const H6 = styled.Text<TextProps>`
  font-family: ${FontFamily.Bold};
  font-size: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontSize};
  font-weight: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontWeight};
  line-height: ${props =>
    props.theme.textStyles[props.textStyle].mobile.lineHeight};
  color: ${props => props.theme.colors.text[props.color]};
`;

export const Button = styled.Text<TextProps>`
  font-family: ${FontFamily.Bold};
  text-align: center;
  font-size: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontSize};
  font-weight: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontWeight};
  line-height: ${props =>
    props.theme.textStyles[props.textStyle].mobile.lineHeight};
  color: ${props => props.theme.colors.text[props.color]};
`;

export const ButtonAlt = styled.Text<TextProps>`
  font-family: ${FontFamily.Bold};
  text-align: center;
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.colors.text[props.color]};
  font-size: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontSize};
  font-weight: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontWeight};
  line-height: ${props =>
    props.theme.textStyles[props.textStyle].mobile.lineHeight};
  color: ${props => props.theme.colors.text[props.color]};
`;

export const Subtitle = styled.Text<TextProps>`
  font-family: ${FontFamily.Regular};
  font-size: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontSize};
  font-weight: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontWeight};
  line-height: ${props =>
    props.theme.textStyles[props.textStyle].mobile.lineHeight};
  color: ${props => props.theme.colors.text[props.color]};
`;

export const Body = styled.Text<TextProps>`
  font-family: ${FontFamily.Regular};
  font-size: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontSize};
  font-weight: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontWeight};
  line-height: ${props =>
    props.theme.textStyles[props.textStyle].mobile.lineHeight};
  color: ${props => props.theme.colors.text[props.color]};
`;

export const BodyAlt = styled.Text<TextProps>`
  font-family: ${FontFamily.Regular};
  font-size: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontSize};
  font-weight: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontWeight};
  line-height: ${props =>
    props.theme.textStyles[props.textStyle].mobile.lineHeight};
  color: ${props => props.theme.colors.text[props.color]};
`;

export const SubtitleAlt = styled.Text<TextProps>`
  font-family: ${FontFamily.Bold};
  font-size: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontSize};
  font-weight: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontWeight};
  line-height: ${props =>
    props.theme.textStyles[props.textStyle].mobile.lineHeight};
  color: ${props => props.theme.colors.text[props.color]};
`;

export const Capture = styled.Text<TextProps>`
  font-family: ${FontFamily.Regular};
  font-size: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontSize};
  font-weight: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontWeight};
  line-height: ${props =>
    props.theme.textStyles[props.textStyle].mobile.lineHeight};
  color: ${props => props.theme.colors.text[props.color]};
`;

export const Overline = styled.Text<TextProps>`
  font-family: ${FontFamily.Regular};
  font-size: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontSize};
  font-weight: ${props =>
    props.theme.textStyles[props.textStyle].mobile.fontWeight};
  line-height: ${props =>
    props.theme.textStyles[props.textStyle].mobile.lineHeight};
  color: ${props => props.theme.colors.text[props.color]};
`;
