import {ImageStyle, ViewStyle} from 'react-native';

export type ImageTypeStyles = {
  styleImage?: ImageStyle;
  contentStyle?: ViewStyle;
};

export type ImageProps = ImageTypeStyles & {
  urlImage: string;
  onOpen?: () => void;
  onClose?: () => void;
};
