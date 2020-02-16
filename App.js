import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native';
import HeaderCard from './Components/HeaderCard';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
=======
import { StyleSheet, Text, View , ScrollView} from 'react-native';
import Home from './Components/Home';
>>>>>>> 095aed07e2464a3a5b638df57fd07a41a43f1ceb


export default function App() {
  
  
  return (
<<<<<<< HEAD
=======
    <ScrollView style={styles.container}>
      <Home />
    </ScrollView>
>>>>>>> 095aed07e2464a3a5b638df57fd07a41a43f1ceb
    
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'gray',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
