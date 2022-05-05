import React, {createContext, FC, ReactNode, useState} from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

import {useTheme} from '../Theme';
import {TModalContext, ModalStylesType} from './PopUp.types';
import {makeStyles} from './PopUp.styles';

const OPEN_DRAWER_DURATION = 300;
const CLOSE_DRAWER_DURATION = 300;

export const ModalContext = createContext<TModalContext | undefined>(undefined);

const deviceHeight = Dimensions.get('window').height;

export const ModalProvider: FC = ({children}) => {
  const [animation] = useState(new Animated.Value(0));
  const [options, setOptions] = useState<ReactNode>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [extensibleStyles, setExtendibleStyles] = useState<ModalStylesType>({});

  const {theme} = useTheme();

  const styles = makeStyles(theme, extensibleStyles);

  const backdrop = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 0.01],
          outputRange: [deviceHeight, 0],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animation.interpolate({
      inputRange: [0.01, 0.5],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
  };

  const slideUp = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0.01, 1],
          outputRange: [0, -1 * deviceHeight],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const handleOpen = (o: ReactNode, customStyles?: ModalStylesType) => {
    customStyles && setExtendibleStyles(customStyles);
    setOptions(o);
    Animated.timing(animation, {
      toValue: 1,
      duration: OPEN_DRAWER_DURATION,
      useNativeDriver: true,
    }).start(finished => {
      if (finished) {
        setOpen(true);
      }
    });
  };

  const handleClose = () => {
    setExtendibleStyles({});
    setOpen(false);
    Animated.timing(animation, {
      toValue: 0,
      duration: CLOSE_DRAWER_DURATION,
      useNativeDriver: true,
    }).start(finished => {
      if (finished) {
        setOptions(null);
      }
    });
  };

  return (
    <ModalContext.Provider value={{handleOpen, handleClose, open}}>
      {children}
      <Animated.View style={[StyleSheet.absoluteFill, styles.cover, backdrop]}>
        <TouchableOpacity
          accessible
          accessibilityLabel="overlay"
          onPress={handleClose}>
          <View style={[styles.overlay]} />
        </TouchableOpacity>
      </Animated.View>
      <View style={[styles.sheet]}>
        <Animated.View style={[styles.card, slideUp]}>{options}</Animated.View>
      </View>
    </ModalContext.Provider>
  );
};
