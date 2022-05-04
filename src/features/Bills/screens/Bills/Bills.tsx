import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '../../../../contexts/Theme';
import {makeStyles} from './Bills.styles';
import {useTranslation} from 'react-i18next';
import {BillsList} from '../../components/BillsList'

const BillsScreen: FC = () => {
  const {theme} = useTheme();
  const styles = makeStyles(theme);
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.head}>
      <Text style={styles.title}>{t('common.bills')}</Text>
      </View>
      <BillsList/>
    </View>
  );
};

export default BillsScreen;
