import {BillType} from '@models/Bill'

export type RequestGetBills = {
  bills: BillType[] | undefined
}