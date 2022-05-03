export type BillType = {
  id: number;
  company: string;
  amount: number;
  status: BillStatus;
};

export enum BillStatus {
  PENDING = 'Pending',
  COMPLETED = 'Completed',
  CANCELED = 'CANCELED',
}

