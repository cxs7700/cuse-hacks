import React from 'react';
import { StyleSheet, Text, View , ScrollView} from 'react-native';
import Home from './Components/Home';


export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Home />
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
