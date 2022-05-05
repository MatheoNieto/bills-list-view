import {useQuery, UseQueryOptions, UseQueryResult} from 'react-query';
import {keysQuery, getBills} from './bills.services';
import {RequestGetBills} from './request.type'

export const useGetBills = (): UseQueryResult<RequestGetBills> =>
  useQuery({
    queryKey: [keysQuery.getBills],
    queryFn: () => getBills(),
  });
