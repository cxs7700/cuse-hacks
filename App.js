import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderCard from './Components/HeaderCard';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hey!</Text>

      <HeaderCard 
        title='New Day'
        source={require('./assets/background16.jpg')}
      />

      <HeaderCard 
        title='Past Days'
        source={require('./assets/background9.jpg')}
      />

    
    </View>
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
