import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {InfoAllBillProps, infoStatus} from './InfoAllBill.types';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './InfoAllBill.styles';
import {BillType, BillStatus} from '@models/Bill';
import {Image} from '@components/Image';

const InfoAllBill: FC<InfoAllBillProps> = ({bill}) => {
  const {t} = useTranslation();
  const {theme} = useTheme();
  const styles = makeStyles(theme);

  const renderData = () => {
    const labels = Object.keys(bill);

    return labels.map((label: string) => {
      if (label !== 'image') {
        return (
          <Text accessibilityLabel={t(`bills.${label}`)}>
            <Text style={styles.textBold}>{t(`bills.${label}`)}: </Text>
            <Text>{bill[label as keyof BillType]}</Text>
          </Text>
        );
      }
      return <Image urlImage={bill.image} styleImage={styles.imageBill} />;
    });
  };

  return (
    <>
      <View style={styles.infoBill}>{renderData()}</View>
      <Text>{t(`${infoStatus[bill.status as BillStatus]}`)}</Text>
    </>
  );
};

export default InfoAllBill;
