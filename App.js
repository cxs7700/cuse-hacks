import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from './Components/Home';
import Pastday from './Components/Pastday';
import SinglePastDay from './Components/SinglePastDay'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


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
            {/* <Stack.Screen name='Newday' component={Newday}/>
            <Stack.Screen name="PastdayInfo" component= {PastdayInfo} /> */}
            <Stack.Screen name='Single Past Day' component={SinglePastDay} />

            
            
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
