import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>William</Text>
            </View>

            <Image 
                source={{ uri:'https://avatars.githubusercontent.com/u/31516475?v=4' }} 
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:20,
    },

    image:{
        width:70,
        height:70,
        borderRadius: 40
    },

    greeting:{
        fontSize:32,
        color:colors.heading,
        fontFamily:fonts.text
    },

    userName:{
        fontSize:32,
        fontFamily:fonts.heading,
        color: colors.heading,
        lineHeight:40
    }
});