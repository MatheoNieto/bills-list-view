import React, {FC} from 'react';
import {View, Text, Pressable} from 'react-native';
import {BillCardProps} from './BillCard.types';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './BillCard.styles';
import {Image} from '@components/Image';
import {useTranslation} from 'react-i18next';
import {usePopUp} from '@contexts/PopUp/hook/usePopUp';
import {InfoAllBill} from '../InfoAllBill';

const BillCard: FC<BillCardProps> = ({bill}) => {
  
  const {theme} = useTheme();
  const styles = makeStyles(theme);
  const {t} = useTranslation();
  const {openPopUp, closePopUp} = usePopUp();

  const renderInfoBill = () => {
    return <InfoAllBill bill={bill} />;
  };

  return (
    <View style={styles.container}>
      <Image urlImage={bill.image} />
      <View style={styles.infoBill}>
        <Text accessibilityLabel={`${bill.date}`}>
          <Text style={styles.textBold}>{`${t('bills.date')}:`} </Text>
          <Text>{bill.date}</Text>
        </Text>

        <Text accessibilityLabel={`${bill.status}`}>
          <Text style={styles.textBold}>{`${t('bills.status')}:`} </Text>
          <Text>{bill.status}</Text>
        </Text>

        <Pressable
          style={styles.seeMore}
          onPress={() => openPopUp(renderInfoBill)}>
          <Text style={styles.seeMoreLabel}>{t('common.seeMore')}</Text>
        </Pressable>
      </View>

      
    </View>
  );
};

export default BillCard;
