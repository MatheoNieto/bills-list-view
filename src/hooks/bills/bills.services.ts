import {bills} from './mock/listBills';

export const getBills = async (billsLoad: number) => {
  return Promise.resolve(bills.slice(0, billsLoad));
};

export const keysQuery = {
  getBills: 'useGetBills',
};
