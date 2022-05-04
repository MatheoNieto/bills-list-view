import {BillsActionsTypes} from './Bill.types';
import {BillType} from '../../../../models';

export type ActionsBills = {
  type: BillsActionsTypes.LOAD_BILLS;
  bills: BillType[];
};
