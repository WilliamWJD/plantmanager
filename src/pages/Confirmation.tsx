import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Text, StyleSheet, View, SafeAreaView } from 'react-native';

import Button from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface Params{
    title:string;
    subTitle:string;
    buttonTitle:string;
    icon: 'smile' | 'hug',
    nextScreen:string
}

const emojis = {
    hug: '🤗',
    smile: '😄'
}

export function Confirmation(){
    const navigation = useNavigation();
    const routes = useRoute();

    const{
        title,
        subTitle,
        buttonTitle,
        icon,
        nextScreen
    } = routes.params as Params;

    function handleMoveOn(){
        navigation.navigate(nextScreen)
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    {emojis[icon]}
                </Text>

                <Text style={styles.title}>{title}</Text>

                <Text style={styles.subTitle}>
                    {subTitle}
                </Text>

                <View style={styles.footer}>
                    <Button
                        name={buttonTitle}
                        onPress={handleMoveOn}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-around',
    },

    content:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        padding:30
    },

    title:{
        fontSize:22,
        fontFamily:fonts.heading,
        textAlign:'center',
        color: colors.heading,
        lineHeight:38,
        marginTop:15
    },

    subTitle:{
        fontFamily: fonts.text,
        textAlign:'center',
        fontSize:17,
        paddingVertical:10,
        color: colors.heading
    },

    emoji:{
        fontSize:78
    },

    footer:{
        width:'100%',
        paddingHorizontal:50,
        marginTop:20
    }

});