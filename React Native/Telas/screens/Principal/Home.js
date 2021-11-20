import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Header from "../../components/ComponentesHome/Header"
import Graficos from "../../components/ComponentesHome/Graficos"



export default function Home() {

  return (
    <NavigationContainer>
<Header/>
<Graficos/>
    </NavigationContainer>
  );
}