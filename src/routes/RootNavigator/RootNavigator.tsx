import React from 'react';
import {withTranslation} from 'react-i18next';
import {Bills} from '../../features/Bills';

export const RootNavigator = withTranslation()(() => <Bills />);
