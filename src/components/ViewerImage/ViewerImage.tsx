import React, {FC} from 'react';
import { Modal, View, Pressable, Text, SafeAreaView } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {ViewerImageProps} from './ViewerImage.types';
import {useTheme} from '../../contexts/Theme';
import {makeStyles} from './ViewerImage.styles';
import {useTranslation} from 'react-i18next';

const ViewerImage: FC<ViewerImageProps> = ({visible, image, onClose}) => {
  const {theme} = useTheme();
  const styles = makeStyles(theme);
  const {t} = useTranslation();

  return (
    <Modal visible={visible} transparent={true}>
      <SafeAreaView style={[styles.container, {backgroundColor: 'white'}]}>
        <Pressable onPress={onClose}>
          <Text>{t('common.close')}</Text>
        </Pressable>
      </SafeAreaView>
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
