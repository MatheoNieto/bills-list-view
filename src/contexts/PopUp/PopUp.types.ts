import {ViewStyle} from 'react-native';
import {ReactNode} from 'react';

export type ModalStylesType = {
  cover?: ViewStyle;
  card?: ViewStyle;
  sheet?: ViewStyle;
};

export type TModalContext = {
  handleOpen: (options: ReactNode, styles?: ModalStylesType) => void;
  handleClose: () => void;
  open: boolean;
};
