import React, {useState, useEffect} from 'react';
import { Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Animated } from 'react-native';
import Constants from 'expo-constants';
import {css} from './assets/css/css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import Password from './screens/Password';
import FinalizarCadastro from './screens/FinalizarCadastro';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="FinalizarCadastro" component={FinalizarCadastro} />
        <Stack.Screen name="Password" component={Password} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}