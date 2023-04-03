import styled from 'styled-components/native';

export const PrimaryButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.button.active};
  padding: 16px;
  border-radius: 8px;
`;

export const SecondaryButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.background.primary};
  padding: 16px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${props => props.theme.colors.button.active};
`;

export const TertiaryButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.background.primary};
  padding: 16px;
  border-radius: 8px;
`;
