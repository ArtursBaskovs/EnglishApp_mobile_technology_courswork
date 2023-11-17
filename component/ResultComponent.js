import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';


const ResultComponent = ({navigation}) => {
    const routePassedData = useRoute();
    useEffect(() => {
      console.log(routePassedData);
    
      return () => {
        
      }
    }, [])
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          
          backgroundColor: '#f8ebff',
        },
        header: {
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#494453',
          marginTop: 120,
          marginBottom: 50,
        },
        inputField:{
          borderWidth: 1,
          borderColor: 'gray',
          padding: 10,
          borderRadius: 5,
          marginTop: 20,
          marginBottom: 20,
          width: '60%'
        },
        buttonContainer: {
            marginTop: 20,
            
           
            width: '60%',
        },
        textInfo: {
            color: 'hsl(276, 42%, 33%)',
            marginTop: 20,
            fontSize: 16
          }
        
      });
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Your results</Text>
            <View>
                <Text style={styles.textInfo}>Score: {routePassedData.params?.Score} of {routePassedData.params?.totalPossible}</Text>
                <Text style={[styles.textInfo, {color: 'hsl(0, 42%, 33%)'}]}>Wrong answers: {routePassedData.params?.WrongCount}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title='Home'
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
            
        </View>
    );
}
export default ResultComponent;