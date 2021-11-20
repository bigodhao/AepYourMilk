import React, {useState, useEffect} from 'react';
import { Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Animated } from 'react-native';
import {css} from '../../assets/css/css';

export default function Login({navigation}) {

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
<KeyboardAvoidingView style={css.background}>
  <View style={css.containerLogo}>
  <Image style={css.logo1x} source={require('../../assets/img/Logo1x.png')} />
  </View>

  <Animated.View style={[
    css.container,
    {
      opacity: opacity,
      transform: [
        { translateY: offset.y}
      ]
    }
    ]}>
    <TextInput
    style={css.input}
    placeholder="Email"
    autoCorrect={false}
    onChangeText={() => {}}
    />

<TextInput
    style={css.input}
    placeholder="Senha"
    autoCorrect={false}
    onChangeText={() => {}}
    />

    <TouchableOpacity style={css.btnSubmit} onPress={() =>navigation.navigate('Home')}>
      <Text style={css.submitText}>Acessar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={css.btnRegister} onPress={() =>navigation.navigate('Cadastrar')}>
      <Text style={css.registerText}>Criar conta gratuita</Text>
    </TouchableOpacity>

    <TouchableOpacity style={css.btnForgotPass} onPress={() =>navigation.navigate('Password')}>
      <Text style={css.registerText}>Esqueci minha senha</Text>
    </TouchableOpacity>
    </Animated.View>
  </KeyboardAvoidingView>

  );
}