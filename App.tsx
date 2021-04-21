import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';

import Welcome from './src/pages/welcome';

export default function App(){
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }
  
  return(
    <>
      <StatusBar backgroundColor="transparent" barStyle="dark-content"/>
      <Welcome/>
    </>
  )
}