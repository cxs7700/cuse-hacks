import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from './Components/Home';
import Pastday from './Components/Pastday';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function App() {
  
  
  return (
      <NavigationContainer>
       
          <MyStack />
       
      </NavigationContainer>
      
      
  );
}
const Stack = createStackNavigator();



function MyStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name='Welcome' component={Home} />
            <Stack.Screen name='Pastdays' component={Pastday} />
            
        </Stack.Navigator>
    )

}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'gray',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
