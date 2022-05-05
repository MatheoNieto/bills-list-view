import {useQuery, UseQueryResult} from 'react-query';
import {keysQuery, getBills} from './bills.services';
import {RequestGetBills} from './request.type';
import {bills} from '@features/Bills/mock/listBills';

export const useGetBills = (
  billsLoad: number = 10,
): UseQueryResult<RequestGetBills> =>
  useQuery({
    queryKey: [keysQuery.getBills],
    queryFn: () => {
      return bills.slice(0, billsLoad);
    },
  });
