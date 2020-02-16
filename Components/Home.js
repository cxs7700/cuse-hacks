import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import HeaderCard from './HeaderCard';

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
        <View style={styles.back}>
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
        </View>
        )
    }
  }


  const styles = StyleSheet.create({
    container: {
    //   backgroundColor: 'black',
      width: '100%'
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
        marginTop: 70,
        marginLeft: 20,
        color: 'black'
    },

  });
  