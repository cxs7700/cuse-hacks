import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity, ScrollView} from 'react-native';
import HeaderCard from './HeaderCard';
import Weather from './Weather'

export default class Home extends React.Component {

    constructor (props) {
        super(props);
        this.state={};

    }

    _onPressButton = () => {
        alert('Button presses!');
    }

    render() {
        return (
        <ScrollView style={styles.back}>
            <Text style={styles.text}>Hey, User!</Text>
            <View style={styles.container}>
                <View style={styles.cardLayout}>
                    <TouchableOpacity onPress={this._onPressButton}>
                        <HeaderCard
                        title='New Day'
                        source={require('../assets/background16.jpg')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._onPressButton}>
                        <HeaderCard 
                        title='Past Days'
                        source={require('../assets/background9.jpg')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.weatherText}>Weather</Text>
            <Weather />
        </ScrollView>
        )
    }
  }


  const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginBottom: 80,
    },
    cardLayout: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '90%',
        display: 'flex',
    },
    text: {
        fontSize: 25,
        marginTop: 20,
        marginLeft: 20,
        color: 'black'
    },
    weatherText: {
        left: 20,
        top: 190,
        fontSize: 25,
        position: "absolute",
    }

  });
  