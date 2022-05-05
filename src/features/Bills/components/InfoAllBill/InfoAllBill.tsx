import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {InfoAllBillProps} from './InfoAllBill.types';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './InfoAllBill.styles';

const InfoAllBill: FC<InfoAllBillProps> = ({bill}) => {
  const {t} = useTranslation();
  const {theme} = useTheme();
  const styles = makeStyles(theme);
  return (
    <View style={styles.infoBill}>
      <Text accessibilityLabel={`${bill.date}`}>
        <Text style={styles.textBold}>{`${t('common.datePaid')}:`} </Text>
        <Text>{bill.date}</Text>
      </Text>

      <Text accessibilityLabel={`${bill.destiny}`}>
        <Text style={styles.textBold}>{`${t('common.payTo')}:`} </Text>
        <Text>{bill.destiny}</Text>
      </Text>

      <Text accessibilityLabel={`${bill.status}`}>
        <Text style={styles.textBold}>{`${t('common.statusPaid')}:`} </Text>
        <Text>{bill.status}</Text>
      </Text>
    </View>
  );
};

export default InfoAllBill;
