import React from 'react';
import { StatusBar } from 'react-native';

import Welcome from './src/pages/welcome';

export default function App(){
  return(
    <>
      <StatusBar backgroundColor="transparent" barStyle="dark-content"/>
      <Welcome/>
    </>
  )
}