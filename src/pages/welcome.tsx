import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import wateringImg from '../assets/watering.png';

export function Welcome() {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Gerencie {'\n'} suas plantas de {'\n'} forma fácil</Text>
                <Image
                    source={wateringImg}
                    style={styles.image}
                    resizeMode="contain"
                />
                <Text style={styles.subTitle}>Não esqueça mais de regas duas plantas. Nós cuidamos de lembrar você sempre que precisar</Text>

                <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                    <Feather
                        name="chevron-right"
                        style={styles.buttonIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    wrapper:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    title: {
        fontSize: 28,
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily:fonts.heading,
        lineHeight:34
    },

    image: {
        height: Dimensions.get('window').width * 0.7,
    },

    subTitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },

    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },

    buttonIcon: {
        fontSize: 32,
        color: colors.white,
    }
})

export default Welcome;