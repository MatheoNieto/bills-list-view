import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {InfoAllBillProps} from './InfoAllBill.types';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './InfoAllBill.styles';
import {BillType} from '@models/Bill';

const InfoAllBill: FC<InfoAllBillProps> = ({bill}) => {
  const {t} = useTranslation();
  const {theme} = useTheme();
  const styles = makeStyles(theme);

  const renderData = () => {
    const labels = Object.keys(bill);

    return labels.map((label: string) => (
      <Text accessibilityLabel={t(`bills.${label}`)}>
        <Text style={styles.textBold}>{t(`bills.${label}`)}: </Text>
        <Text>{bill[label as keyof BillType]}</Text>
      </Text>
    ));
  };

  return <View style={styles.infoBill}>{renderData()}</View>;
};

export default InfoAllBill;
