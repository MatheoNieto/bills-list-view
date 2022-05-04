import React from 'react';
import {BillsListProvider} from './context';
import {BillsScreen} from './screens';

export const Bills = () => (
  <BillsListProvider>
    <BillsScreen />
  </BillsListProvider>
);
