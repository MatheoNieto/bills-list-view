import React from 'react';
import {View, FlatList} from 'react-native';

import {bills} from '../../mock/listBills';
import {BillCard} from '../BillCard';
import {BillType} from '../../../../models';

type renderItemType = {item: BillType; index: number};

const BillsList = () => {
  const renderItem = ({item, index}: renderItemType) => (
    <BillCard key={`${item.id}${index}`} bill={item} />
  );

  return (
    <View>
      <FlatList data={bills} renderItem={renderItem} />
    </View>
  );
};

export default BillsList;
