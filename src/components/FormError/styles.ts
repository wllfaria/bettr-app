import styled from 'styled-components/native';

export const ErrorBox = styled.View`
  margin-bottom: 24px;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${props => props.theme.colors.border.alert};
  border-style: dashed;
  padding: 16px;
`;
