import {BillsActionsTypes} from './Bill.types';
import {BillType} from '@models/Bill';

export type ActionsBills = {
  type: BillsActionsTypes.LOAD_BILLS;
  bills: BillType[];
};
