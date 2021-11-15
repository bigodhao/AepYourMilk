import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { css } from '../../assets/css/css';

const Radio = ({options=[], onChangeSelect, selected}) => {


  return (
    <View style={css.optContainer}>
      {
        options.map((opt, index)=> (
          <TouchableOpacity onPress={() => onChangeSelect(opt, index)} style={css.optContainer}>
            <View style={css.outlineRadio}>
             {selected == index && <View style={css.innerRadio}/>}
            </View>
            <Text style={[css.darkText, {color: selected == index ? '#282828' : '#777'}]}>{opt}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
  );
};

export default Radio;