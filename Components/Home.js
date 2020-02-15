import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderCard from './HeaderCard';

export default function Home() {
    return (
      <View style={styles.container}>
        <Text>Hey!</Text>
        
        <View style={styles.cardLayout}>

            <HeaderCard
            title='New Day'
            source={require('../assets/background16.jpg')}
            />
    
            <HeaderCard 
            title='Past Days'
            source={require('../assets/background9.jpg')}
            />
        </View>
      
      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    cardLayout: {
        flexDirection: 'row',
    }
  });
  