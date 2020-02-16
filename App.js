import React from 'react';
import { StyleSheet, Text, View , ScrollView} from 'react-native';
import Home from './components/Home';
import Weather from './components/Weather';


export default function App() {
  
  return (
    <ScrollView style={styles.container}>
      <Home />
      <Weather />
    </ScrollView>
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
