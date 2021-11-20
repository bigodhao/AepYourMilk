import React, {useState, useEffect} from 'react';
import {  Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Animated } from 'react-native';

import {css} from '../../assets/css/css';
import Radio from '../../components/Radio/cadastro';

export default function Cadastro({navigation}) {

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
  const [opacity] = useState(new Animated.Value(0));
  const [selected, setSelected] = useState(0);

  

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
  <Text style={css.textTitle}>Cadastro</Text>
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
{/*       
      <Text style={css.registerText}>O meu usuário será: </Text>

      <Radio 
      selected={selected}
      options={['Padrão', 'Administrador']}
      onChangeSelect={(opt, i) => setSelected(i)}
      /> */}

    <TextInput
    style={css.input}
    placeholder="Nome"
    autoCorrect={false}
    onChangeText={() => {}}
    />

<TextInput
    style={css.input}
    placeholder="Sobrenome"
    autoCorrect={false}
    onChangeText={() => {}}
    />

<TextInput
    style={css.input}
    placeholder="E-mail"
    autoCorrect={false}
    onChangeText={() => {}}
    />

<TextInput
    style={css.input}
    placeholder="Confirmar e-mail"
    autoCorrect={false}
    onChangeText={() => {}}
    />

<TextInput
    style={css.input}
    placeholder="Senha"
    autoCorrect={false}
    onChangeText={() => {}}
    />

<TextInput
    style={css.input}
    placeholder="Confirmar senha"
    autoCorrect={false}
    onChangeText={() => {}}
    />


    <TouchableOpacity style={css.btnSubmit} onPress={() =>navigation.navigate('FinalizarCadastro')}>
      <Text style={css.submitText}>Próxima >></Text>
    </TouchableOpacity>
    </Animated.View>
  </KeyboardAvoidingView>

  );
}