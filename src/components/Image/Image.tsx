import React, {useState, FC} from 'react';
import {Pressable, Image} from 'react-native';
import {ImageProps} from './Image.types';
import {ViewerImage} from '../ViewerImage';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './Image.styles';

const ImageComponent: FC<ImageProps> = ({
  urlImage,
  styleImage,
  contentStyle,
  onClose,
  onOpen,
}) => {
  const [showViewerImage, setShowViewerImage] = useState<boolean>(false);
  const {theme} = useTheme();
  const styles = makeStyles(theme, {styleImage, contentStyle});

  const handleShowViewerImage = () => {
    setShowViewerImage(true);
    onOpen && onOpen();
  };

  const handleHidViewerImage = () => {
    setShowViewerImage(false);
    onClose && onClose();
  };

  return (
    <>
      <Pressable style={styles.contentImage} onPress={handleShowViewerImage}>
        <Image style={styles.imageBill} source={{uri: urlImage}} />
      </Pressable>
      <ViewerImage
        visible={showViewerImage}
        image={urlImage}
        onClose={handleHidViewerImage}
      />
    </>
  );
};
export default ImageComponent;
