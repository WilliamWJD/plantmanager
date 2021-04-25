import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Alert } from 'react-native';
import { formatDistance } from 'date-fns/esm';
import { pt } from 'date-fns/locale';
import { loadPlant, PlantProps, removePlants } from '../libs/storage';

import { Header } from '../components/Header';
import { Loading } from '../components/Loading';
import { PlantCardSecondary } from '../components/PlantCardSecondary';

import colors from '../styles/colors';
import fonts from '../styles/fonts';


import waterdropImage from '../assets/waterdrop.png'


export function MyPlants(){
    const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextWatered, setNextWatered] = useState<string>()

    useEffect(()=>{
        async function loadStorageData(){
            const plantsStoraged = await loadPlant();


                const nextTime = formatDistance(
                    new Date(plantsStoraged[0].dateTimeNotification).getTime(),
                    new Date().getTime(),
                    {locale:pt}
                )

                setNextWatered(`Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime}.`)

                setMyPlants(plantsStoraged);
            
            setLoading(false)
        }

        loadStorageData();
    },[])

    if(loading){
        return <Loading/>
    }

    function handleRemove(plant:PlantProps){
        Alert.alert('Remover', `Deseja remover a ${plant.name}?`,[
            {
                text:'Não 🙏',
                style:'cancel'
            },
            {
                text:'Sim 🥺',
                onPress: async()=>{
                    try{
                        await removePlants(plant.id);
                        setMyPlants((oldData)=>(
                            oldData.filter((item)=>item.id !== plant.id)
                        ))
                    }catch(err){
                        Alert.alert('Erro', 'Não foi possível remover! 🥺')
                    }
                }
            }
        ])
    }

    return(
        <View style={styles.container}>
            <Header/>

            <View style={styles.spotlight}>
                <Image source={waterdropImage} style={styles.spotLightImage}/>
                <Text style={styles.spotlightText}>{nextWatered}</Text>
            </View>

            <View style={styles.plants}>
                <Text style={styles.plantsTitle}>Próximas regadas</Text>

                <FlatList
                    data={myPlants}
                    keyExtractor={(item)=>String(item.id)}
                    renderItem={({ item })=>(
                        <PlantCardSecondary
                            data={item}
                            handleRemove={()=>{handleRemove(item)}}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:30,
        paddingTop:50,
        backgroundColor:colors.background
    },

    spotlight:{
        backgroundColor: colors.blue_light,
        paddingHorizontal:20,
        borderRadius:20,
        height:110,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    spotLightImage:{
        width:60,
        height:60,
    },

    spotlightText:{
        flex:1,
        color:colors.blue,
        paddingHorizontal:20,
        textAlign:'justify'
    },

    plants:{
        flex:1,
        width:'100%'
    },

    plantsTitle:{
        fontSize:24,
        fontFamily:fonts.heading,
        color:colors.heading,
        marginVertical:20
    }
});