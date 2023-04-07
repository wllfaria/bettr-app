import { KeyboardAvoidingView, Platform } from 'react-native';

type KBDAvoidingViewProps = {
  children: React.ReactNode;
};

export function KBDAvoidingView({ children }: KBDAvoidingViewProps) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {children}
    </KeyboardAvoidingView>
  );
}
