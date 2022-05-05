import React, {FC, useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {BillCardProps} from './BillCard.types';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './BillCard.styles';
import {ViewerImage} from '@components/ViewerImage';
import {useTranslation} from 'react-i18next';

const BillCard: FC<BillCardProps> = ({bill}) => {
  const [showViewerImage, setShowViewerImage] = useState<boolean>(false);
  const {theme} = useTheme();
  const styles = makeStyles(theme);
  const {t} = useTranslation();


  const handleShowViewerImage = () => setShowViewerImage(true);

  return (
    <View style={styles.container}>
      <Pressable style={styles.contentImage} onPress={handleShowViewerImage}>
        <Image style={styles.imageBill} source={{uri: bill.image}} />
      </Pressable>
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

        <Pressable style={styles.seeMore} onPress={() => null}>
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
