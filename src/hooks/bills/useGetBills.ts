import {useQuery, UseQueryOptions, UseQueryResult} from 'react-query';
import {keysQuery, getBills} from './bills.services';

export const useGetBills = () =>
  useQuery({
    queryKey: [keysQuery.getBills],
    queryFn: () => getBills(),
  });
