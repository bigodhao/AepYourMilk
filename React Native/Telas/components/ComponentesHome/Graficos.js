import React from 'react';
import { View, Text, Image } from 'react-native';
import {css} from '../../assets/css/css';

export default function Graficos() {
  return (

<View>
<Text style={css.tituloGrafico}>Produção de leite diária (litro)</Text>
<Image  style={css.graficocss} source={require('../../assets/img/GraficoPrincipal.png')} />
<Text style={css.nomeUsuario}>Temperatura atual: 15º</Text>
<Text style={css.nomeUsuario}>pH atual: 7</Text>
</View>

  )
}