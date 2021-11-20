import React from 'react';
import { View, Text, Image } from 'react-native';
import {css} from '../../assets/css/css';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
return(
<View style={css.headerPrincipal}>
<Image style={css.logoPrincipal} source={require('../../assets/img/fp.png')} />
<Text style={css.nomeUsuario}>Olá, Wesley!</Text>
<Ionicons style={css.notificacao} name="notifications" size={30} color={'#75C9EE'}/>
</View>

)
}