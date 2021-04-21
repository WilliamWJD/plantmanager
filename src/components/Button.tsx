import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps{
    name:string;
}

const components: React.FC<ButtonProps> = ({ name, ...rest }) => {
  return(
      <TouchableOpacity style={styles.container} {...rest}>
          <Text style={styles.text}> {name} </Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.green,
        height:56,
        borderRadius:16,
        justifyContent:'center',
        alignItems:'center'
    },

    text:{
        fontSize:16,
        color:colors.white,
        fontFamily:fonts.heading
    },
})

export default components;