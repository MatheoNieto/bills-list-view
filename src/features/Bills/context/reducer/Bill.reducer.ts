import {BillsActionsTypes} from './Bill.types';
import {ActionsBills} from './Bill.actions';
import {BillsState} from '../models/BillsState';

const {LOAD_BILLS} = BillsActionsTypes;

export const INITIAL_STATE: BillsState = {
  bills: [],
};

export const billsReducer = (state: BillsState, action: ActionsBills) => {
  switch (action.type) {
    case LOAD_BILLS:
      return {
        ...state,
      };

    default:
      return state;
  }
};
