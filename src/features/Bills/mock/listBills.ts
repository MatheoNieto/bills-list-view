import {BillType, BillStatus} from '../../../models';

export const bills: BillType[] = [
  {
    id: 0,
    amount: 1000,
    status: BillStatus.PAID,
    date: '20-03-2022',
    destiny: 'test',
    image: '',
  },
  {
    id: 1,
    amount: 1000,
    status: BillStatus.PAID,
    date: '20-03-2022',
    destiny: 'test',
    image: '',
  },
];
