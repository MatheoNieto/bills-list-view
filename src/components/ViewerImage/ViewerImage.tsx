import React, {FC} from 'react';
import {Modal} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {ViewerImageProps} from './ViewerImage.types';

const ViewerImage: FC<ViewerImageProps> = ({visible, image}) => {
  return (
    <Modal visible={visible} transparent={true}>
      <ImageViewer imageUrls={[{
        url:image
      }]} />
    </Modal>
  );
};

export default ViewerImage;
