import {ReactNode} from 'react';
import {PopUpStyleTypes} from '../PopUp.types';

export type UsePopUpType = {
  openPopUp: (options: ReactNode, styles?: PopUpStyleTypes) => void;
  closePopUp: () => void;
  open: boolean;
};
