export type BillType = {
  id: number;
  image: string;
  destiny: string;
  amount: number;
  status: BillStatus;
  date: string | Date;
};

export enum BillStatus {
  PROCESSING = 'Processing',
  SCHEDULED = 'Scheduled',
  UNABLE_PAY = 'Unable to pay',
  PAID = 'Paid',
}

export type renderItemType = {item: BillType; index: number};
