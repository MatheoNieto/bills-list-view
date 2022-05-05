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
