import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {BillCardProps} from './BillCard.types';
import {useTheme} from '../../../../contexts/Theme';
import {makeStyles} from './BillCard.styles';

const BillCard: FC<BillCardProps> = ({bill}) => {
  const {theme} = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <Text accessibilityLabel={bill.company}>{bill.company}</Text>
    </View>
  );
};

export default BillCard;
