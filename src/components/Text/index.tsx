import { DefaultTheme } from 'styled-components';

import * as S from './styles';

export enum TextStyles {
  largeText = 'largeText',
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  button = 'button',
  subtitle = 'subtitle',
  body = 'body',
  bodyAlt = 'bodyAlt',
  subtitleAlt = 'subtitleAlt',
  capture = 'capture',
  overline = 'overline',
}

type TextStyleMap = {
  [key in TextStyles]: JSX.Element;
};

type TextProps = {
  textType?: TextStyles;
  children: React.ReactNode;
  color?: keyof DefaultTheme['colors']['text'];
};

export function Text({
  children,
  textType = TextStyles.body,
  color = 'body',
}: TextProps) {
  const getTextStyle = (textStyle: TextStyles) => {
    const textStyleMap: TextStyleMap = {
      largeText: (
        <S.LargeText textStyle={textType} color={color}>
          {children}
        </S.LargeText>
      ),
      h1: (
        <S.H1 textStyle={textType} color={color}>
          {children}
        </S.H1>
      ),
      h2: (
        <S.H2 textStyle={textType} color={color}>
          {children}
        </S.H2>
      ),
      h3: (
        <S.H3 textStyle={textType} color={color}>
          {children}
        </S.H3>
      ),
      h4: (
        <S.H4 textStyle={textType} color={color}>
          {children}
        </S.H4>
      ),
      h5: (
        <S.H5 textStyle={textType} color={color}>
          {children}
        </S.H5>
      ),
      h6: (
        <S.H6 textStyle={textType} color={color}>
          {children}
        </S.H6>
      ),
      button: (
        <S.Button textStyle={textType} color={color}>
          {children}
        </S.Button>
      ),
      subtitle: (
        <S.Subtitle textStyle={textType} color={color}>
          {children}
        </S.Subtitle>
      ),
      body: (
        <S.Body textStyle={textType} color={color}>
          {children}
        </S.Body>
      ),
      bodyAlt: (
        <S.BodyAlt textStyle={textType} color={color}>
          {children}
        </S.BodyAlt>
      ),
      subtitleAlt: (
        <S.SubtitleAlt textStyle={textType} color={color}>
          {children}
        </S.SubtitleAlt>
      ),
      capture: (
        <S.Capture textStyle={textType} color={color}>
          {children}
        </S.Capture>
      ),
      overline: (
        <S.Overline textStyle={textType} color={color}>
          {children}
        </S.Overline>
      ),
    };

    return textStyleMap[textStyle];
  };

  return getTextStyle(textType);
}
