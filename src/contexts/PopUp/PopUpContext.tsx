import React, {createContext, FC, ReactNode, useState} from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

import {useTheme} from '../Theme';
import {
  PopUpType,
  PopUpStyleTypes,
  OPEN_DRAWER_DURATION,
  CLOSE_DRAWER_DURATION,
} from './PopUp.types';

import {makeStyles} from './PopUp.styles';

export const PopUpContext = createContext<PopUpType | undefined>(undefined);

const deviceHeight = Dimensions.get('window').height;

export const PopUpProvider: FC = ({children}) => {
  const [animation] = useState(new Animated.Value(0));
  const [options, setOptions] = useState<ReactNode>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [extensibleStyles, setExtendibleStyles] = useState<PopUpStyleTypes>({});

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

  const handleOpen = (o: ReactNode, customStyles?: PopUpStyleTypes) => {
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
    <PopUpContext.Provider value={{handleOpen, handleClose, open}}>
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
    </PopUpContext.Provider>
  );
};
