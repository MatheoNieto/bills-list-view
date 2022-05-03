import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '../../../../contexts/Theme';
import {makeStyles} from './Bills.styles';
import {useTranslation} from 'react-i18next';

const Bills: FC = () => {
  const {theme} = useTheme();
  const styles = makeStyles(theme);
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t('common.bills')}</Text>
    </View>
  );
};

export default Bills;
