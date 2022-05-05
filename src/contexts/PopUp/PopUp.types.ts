import {ViewStyle} from 'react-native';
import {ReactNode} from 'react';

export type PopUpStyleTypes = {
  cover?: ViewStyle;
  card?: ViewStyle;
  sheet?: ViewStyle;
};

export type PopUpType = {
  handleOpen: (options: ReactNode, styles?: PopUpStyleTypes) => void;
  handleClose: () => void;
  open: boolean;
};


export const OPEN_DRAWER_DURATION = 300;
export const CLOSE_DRAWER_DURATION = 300;