export type BillType = {
  id: number;
  image: string;
  destiny: string;
  amount: number;
  status: BillStatus;
  date: string | Date;
};

export enum BillStatus {
  PROCESSING = 'processing',
  SCHEDULED = 'scheduled',
  UNABLE_PAY = 'unable to pay',
  PAID = 'paid',
}

export type renderItemType = {item: BillType; index: number};
