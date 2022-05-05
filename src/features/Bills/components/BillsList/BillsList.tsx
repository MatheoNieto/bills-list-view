import React from 'react';
import {View, FlatList} from 'react-native';

import {BillCard} from '../BillCard';
import {renderItemType} from '@models/Bill';
import {Spinner} from '@components/Spinner';
import {bills} from '../../mock/listBills'

import {useTheme} from '@contexts/Theme';
import {makeStyles} from './BillsList.styles';

const BillsList = () => {
  const {theme} = useTheme();
  const styles = makeStyles(theme);
  
  const renderItem = ({item, index}: renderItemType) => (
    <BillCard key={`${item.id}${index}`} bill={item} />
  );

  if (bills === undefined) {
    return <Spinner />
  }

  return (
    <View style={styles.container}>
      <FlatList data={bills} renderItem={renderItem} numColumns={2} />
    </View>
  );
};

export default BillsList;
