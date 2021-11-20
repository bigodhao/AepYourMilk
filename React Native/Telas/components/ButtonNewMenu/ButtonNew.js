import React from 'react';
import { View } from 'react-native';
import {css} from '../../assets/css/css';

import { Entypo } from '@expo/vector-icons';

export default function ButtonNew({size}) {
return(
  <View style={css.btnAddContainer}>
  <Entypo name="plus" size={size} color={'#FFF'}/>
</View>
)
}