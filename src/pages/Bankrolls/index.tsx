import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Text } from 'components/Text';

import { AppRouterParamList, AppRoutes } from 'routers/index';

type BankrollsPageProps = NativeStackScreenProps<
  AppRouterParamList,
  AppRoutes.Bankrolls
>;

export function BankrollsPage({}: BankrollsPageProps) {
  return <Text>asdasd</Text>;
}
