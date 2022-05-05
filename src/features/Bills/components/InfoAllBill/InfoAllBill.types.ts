import {BillType, BillStatus} from '@models/Bill';

export type InfoAllBillProps = {
  bill: BillType;
};

export const infoStatus = {
  [BillStatus.PROCESSING]: 'bills.processing',
  [BillStatus.SCHEDULED]: 'bills.scheduled',
  [BillStatus.PAID]: '',
  [BillStatus.UNABLE_PAY]: '',
};
