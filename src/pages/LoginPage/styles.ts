import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const LoginContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  background: ${props => props.theme.colors.background.primary};
  padding-left: 24px;
  padding-right: 24px;
`;

export const FormContainer = styled.View`
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const ButtonContainer = styled.View`
  margin-bottom: 8px;
`;
