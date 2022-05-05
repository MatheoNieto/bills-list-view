import {BillsState} from './BillsState';

export type BillContext = {
  state: BillsState, 
  dispatch: any
} | undefined;
