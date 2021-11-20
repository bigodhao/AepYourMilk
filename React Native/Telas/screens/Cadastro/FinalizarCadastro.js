import React, {useState, useEffect} from 'react';
import {  Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Animated } from 'react-native';

import {css} from '../../assets/css/css';

export default function FinalizarCadastro({navigation}) {

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
  const [opacity] = useState(new Animated.Value(0));

  

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
      bounciness: 20,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
      })
    ]).start();

  }, []);

  return (
<KeyboardAvoidingView style={css.backgroundForm}>
  <View style={css.containerForm}>
  <Text style={css.textTitle}>Endereço</Text>
  </View>

  <Animated.View style={[
    css.containerForm,
    {
      opacity: opacity,
      transform: [
        { translateY: offset.y}
      ]
    }
    ]}>

    <TextInput
    style={css.input}
    placeholder="CEP"
    autoCorrect={false}
    onChangeText={() => {}}
    />

<TextInput
    style={css.input}
    placeholder="Logradouro"
    autoCorrect={false}
    onChangeText={() => {}}
    />

<TextInput
    style={css.input}
    placeholder="Número"
    autoCorrect={false}
    onChangeText={() => {}}
    />

<TextInput
    style={css.input}
    placeholder="Complemento"
    autoCorrect={false}
    onChangeText={() => {}}
    />

<TextInput
    style={css.input}
    placeholder="Bairro"
    autoCorrect={false}
    onChangeText={() => {}}
    />

<TextInput
    style={css.input}
    placeholder="Estado"
    autoCorrect={false}
    onChangeText={() => {}}
    />

<TextInput
    style={css.input}
    placeholder="Cidade"
    autoCorrect={false}
    onChangeText={() => {}}
    />


    <TouchableOpacity style={css.btnConfirm}>
      <Text style={css.submitText}>Cadastre-se</Text>
    </TouchableOpacity>
    </Animated.View>
  </KeyboardAvoidingView>

  );
}