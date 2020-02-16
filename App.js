import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderCard from './components/HeaderCard';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Weather from './components/Weather'
import { ScrollView } from 'react-native-gesture-handler';


export default function App() {
  
  
  return (
    <ScrollView>
      <Weather />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
