import * as React from 'react';
import {useState} from 'react';
import { View, Text, Button, Image, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TaskComponent from './component/TaskComponent';
import ResultComponent from './component/ResultComponent';


function HomeScreen({navigation}) {
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
      marginTop: 150,
      marginBottom: 100,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
    }
    
  });
  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>Begin your path to learning English</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Word practice"
          onPress={() => navigation.navigate('Word Practice', {taskT: "words"})}
          style={styles.button}
        />
        <Button
          title="Riddles"
          onPress={() => navigation.navigate('Riddles', {taskT: "riddles"})}
          style={[styles.button, { marginTop: 100 }]}
        />
      </View>

    </View>
  );
}





const Stack = createNativeStackNavigator();

function LogoTitle() {
  
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={'https://i.pinimg.com/564x/12/f0/e9/12f0e96fb41bc7e972708e3a6bcceceb.jpg'}
    />
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0088ff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      
      >



        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Home' }} />
        <Stack.Screen 
          name="Word Practice" 
          component={TaskComponent}
          initialParams={{ itemId: 42 }} />
        <Stack.Screen 
          name="Riddles" 
          component={TaskComponent}
          initialParams={{ itemId: 42 }} />
        <Stack.Screen 
          name='Results'
          component={ResultComponent}
          options={{ headerLeft: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;