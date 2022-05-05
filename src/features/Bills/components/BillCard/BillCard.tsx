import React, {FC, useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {BillCardProps} from './BillCard.types';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './BillCard.styles';
import {ViewerImage} from '@components/ViewerImage';
import {useTranslation} from 'react-i18next';
import {usePopUp} from '@contexts/PopUp/hook/usePopUp';
import {InfoAllBill} from '../InfoAllBill';

const BillCard: FC<BillCardProps> = ({bill}) => {
  const [showViewerImage, setShowViewerImage] = useState<boolean>(false);
  const {theme} = useTheme();
  const styles = makeStyles(theme);
  const {t} = useTranslation();
  const {openPopUp, closePopUp} = usePopUp();

  const handleShowViewerImage = () => {
    setShowViewerImage(true);
    closePopUp();
  };

  const renderInfoBill = () => {
    return <InfoAllBill bill={bill} />;
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.contentImage} onPress={handleShowViewerImage}>
        <Image style={styles.imageBill} source={{uri: bill.image}} />
      </Pressable>
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

      <ViewerImage
        visible={showViewerImage}
        image={bill.image}
        onClose={() => setShowViewerImage(false)}
      />
    </View>
  );
};

export default BillCard;
