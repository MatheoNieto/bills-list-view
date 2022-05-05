import {useContext, useEffect} from 'react';
import {BackHandler} from 'react-native';
import {PopUpContext} from '../PopUpContext';
import {UsePopUpType} from './usePopUp.type';

export const usePopUp = (): UsePopUpType => {
  const context = useContext(PopUpContext);

  if (context === undefined) {
    throw new Error('usePopUp must be used within a PopUpProvider');
  }

  const {handleOpen, handleClose, open} = context;

  useEffect(() => {
    if (open) {
      const backAction = () => {
        handleClose();
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      return () => backHandler.remove();
    }
  }, [handleClose, open]);

  return {openPopUp: handleOpen, closePopUp: handleClose, open};
};
