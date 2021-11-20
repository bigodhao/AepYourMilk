import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Principal/Home';
import CadastrarItem from './Principal/CadastrarItem/CadastrarItem';
import Configuracoes from './Principal/Configuracoes/Configuracoes';
import Scan from './Principal/QRCode/Scan';
import Graficos from './Principal/Graficos/Graficos';

import ButtonNew from '../components/ButtonNewMenu/ButtonNew';

import { Entypo, Feather, FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes(){
return(
<Tab.Navigator
  screenOptions={{
    tabBarStyle: {
      backgroundColor: '#75C9EE',
      borderTopColor: 'transparent',
      paddingBottom: 5,
      paddingTop: 5,
    },
    tabBarActiveTintColor: '#3275C7',
    tabBarInactiveTintColor: '#FFF',
  }}
>
  
  <Tab.Screen 
  name="Home" 
  component={Home}
  options={{
    tabBarIcon: ({size, color }) => (
<Entypo name="home" size={size} color={color} />
    )
  }}
  ></Tab.Screen>

  <Tab.Screen 
  name="Gráficos" 
  component={Graficos}
  options={{
    tabBarIcon: ({size, color }) => (
<Entypo name="bar-graph" size={size} color={color} />
    )
  }}
  ></Tab.Screen>

  <Tab.Screen 
  name="Cadastrar" 
  component={CadastrarItem}
  options={{
    tabBarLabel: '',
    tabBarIcon: ({focused, size, color }) => (
<ButtonNew size={size} color={color} focused={focused}/>
    )
  }}
  ></Tab.Screen>

  <Tab.Screen 
  name="QR Code" 
  component={Scan}
  options={{
    tabBarIcon: ({size, color }) => (
<FontAwesome5 name="qrcode" size={size} color={color} />
    )
  }}
  ></Tab.Screen>

  <Tab.Screen 
  name="Configurações" 
  component={Configuracoes}
  options={{
    tabBarIcon: ({size, color }) => (
<Feather name="settings" size={size} color={color} />
    )
  }}
  ></Tab.Screen>

</Tab.Navigator>
)
}