import React, {FC,createContext, useReducer} from 'react';
import {BillContext} from './models'
import {billsReducer, INITIAL_STATE} from './reducer'

export const BillsListContext = createContext<BillContext>(undefined)

export const BillsListProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer(
    billsReducer,
    INITIAL_STATE
  )

  return(
    <BillsListContext.Provider value={{state, dispatch}}>
      {children}
    </BillsListContext.Provider>
  )
}