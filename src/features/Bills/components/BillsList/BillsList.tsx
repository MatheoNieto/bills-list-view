import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';

import {BillCard} from '../BillCard';
import {renderItemType} from '@models/Bill';
import {Spinner} from '@components/Spinner';

import {useTheme} from '@contexts/Theme';
import {makeStyles} from './BillsList.styles';
import {useGetBills} from '@hooks/bills';

const BillsList = () => {
  const [loadBills, setLoadBills] = useState<number>(6);
  const {theme} = useTheme();
  const styles = makeStyles(theme);
  const {isLoading, data: bills, refetch} = useGetBills(loadBills);

  useEffect(() => {
    refetch();
  }, [loadBills, refetch]);

  const renderItem = ({item}: renderItemType) => <BillCard bill={item} />;

  if (bills === undefined && isLoading) {
    return <Spinner />;
  }

  const handleLoadMore = () => {
    const cantGet = loadBills + loadBills;
    setLoadBills(cantGet);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={bills}
        renderItem={renderItem}
        numColumns={2}
        initialNumToRender={loadBills}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.05}
        keyExtractor={(item, index) => `${item.id}-${index}`}
      />
    </View>
  );
};

export default BillsList;
