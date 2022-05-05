import React, {FC} from 'react';
import {Modal, View, Pressable, Text} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {ViewerImageProps} from './ViewerImage.types';
import {useTheme} from '../../contexts/Theme';
import {makeStyles} from './ViewerImage.styles';

const ViewerImage: FC<ViewerImageProps> = ({visible, image, onClose}) => {
  const {theme} = useTheme();
  const styles = makeStyles(theme);

  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.container}>
        <Pressable onPress={onClose}>
          <Text>Close</Text>
        </Pressable>
      </View>
        <ImageViewer
          imageUrls={[
            {
              url: image,
            },
          ]}
        />
    </Modal>
  );
};

export default ViewerImage;
