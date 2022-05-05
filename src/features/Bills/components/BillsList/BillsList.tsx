import React from 'react';
import {View, FlatList} from 'react-native';

import {BillCard} from '../BillCard';
import {renderItemType} from '../../../../models';
import {Spinner} from '../../../../components';
import {useGetBills} from '../../../../hooks/bills';

const BillsList = () => {
  const {data} = useGetBills();

  const renderItem = ({item, index}: renderItemType) => (
    <BillCard key={`${item.id}${index}`} bill={item} />
  );

  if (data === undefined) {
    return <Spinner />
  }

  return (
    <View>
      <FlatList data={data.bills} renderItem={renderItem} numColumns={2} />
    </View>
  );
};

export default BillsList;
