import {BillType} from '../../models'

export type RequestGetBills = {
  bills: BillType[] | undefined
}