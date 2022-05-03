import { BillType, BillStatus } from "src/models";

export const bills: BillType[] = [
  {
  id: 0,
  company: 'test company',
  amount: 1000,
  status: BillStatus.CANCELED
},
  {
  id: 1,
  company: 'test company 2 ',
  amount: 1200,
  status: BillStatus.PENDING
}
]