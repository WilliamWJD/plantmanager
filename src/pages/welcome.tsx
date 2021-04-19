import React, {useState} from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import colors from '../styles/colors';

import wateringImg from '../assets/watering.png';
import { Button } from '../components/Button';

export function Welcome(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Gerencie {'\n'} suas plantas {'\n'} de forma fácil</Text>

            <Image source={wateringImg} style={styles.image}/>

            <Text style={styles.subTitle}>Não esqueça mais de regas duas plantas. Nós cuidamos de lembrar você sempre que precisar</Text>
        
            <Button />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-between'
    },

    title:{
        fontSize:32,
        fontWeight:'bold',
        textAlign:'center',
        color:colors.heading,
        marginTop:38
    },

    image:{
        width:292,
        height:284
    },

    subTitle:{
        textAlign:'center',
        fontSize:18,
        paddingHorizontal:20,
        color: colors.heading
    }
})

export default Welcome;