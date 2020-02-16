import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from './Components/Home';
import Pastday from './Components/Pastday';
import Newday from './Components/Newday';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NewdayForm from './Components/NewdayForm';
import SinglePastDay from './Components/SinglePastDay'


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
            <Stack.Screen name='Enter' component={Newday}/>
            {/* <Stack.Screen name="PastdayInfo" component= {PastdayInfo} /> */}

            
            
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
