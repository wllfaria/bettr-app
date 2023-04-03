import styled from 'styled-components/native';

import { Text } from 'components/Text';

export const Input = styled.TextInput`
  padding: 16px;
  border-color: ${props => props.theme.colors.border.field};
  border-width: 1px;
  border-radius: 8px;
  font-size: ${props => props.theme.textStyles.body.mobile.fontSize};
  margin-bottom: 8px;
`;

export const LabelContainer = styled.View`
  margin-bottom: 8px;
  flex-direction: row;
`;

export const Label = styled(Text)``;

export const FieldRequired = styled.Text`
  margin-left: 8px;
  color: ${props => props.theme.colors.text.alert};
`;

export const SupportText = styled(Text)``;

export const ErrorText = styled(Text)``;
