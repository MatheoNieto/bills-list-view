export type BillType = {
  id: number;
  company: string;
  amount: number;
  status: BillStatus;
};

export enum BillStatus {
  PROCESSING = 'processing',
  SCHEDULED = 'scheduled',
  UNABLE_PAY = 'unable to pay',
  PAID = 'paid',
}

