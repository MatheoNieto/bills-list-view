import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';
import {BillCardProps} from './BillCard.types';
import {useTheme} from '../../../../contexts/Theme';
import {makeStyles} from './BillCard.styles';

const BillCard: FC<BillCardProps> = ({bill}) => {
  const {theme} = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.contentImage}>
        <Image style={styles.imageBill} source={{uri: bill.image}} />
      </View>
      <View style={styles.infoBill}>

      <Text accessibilityLabel={`${bill.date}`}>
        <Text style={styles.textBold}>Date: </Text>
        <Text>{bill.date}</Text>
      </Text>

      <Text accessibilityLabel={`${bill.destiny}`}>
        <Text style={styles.textBold}>Pay to: </Text>
        <Text>{bill.destiny}</Text>
      </Text>
      </View>
    </View>
  );
};

export default BillCard;
