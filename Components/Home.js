import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import HeaderCard from './HeaderCard';
import {Navigation} from '@react-navigation/native';
import Pastday from '../Components/Pastday';
import firebase from 'firebase';


const navigate = ({ Navigation }) => {

}

export default class Home extends React.Component {

    componentWillMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyBhGWu0c7QeM4VpBCa9g4-CRyw6vA3qSh4",
            authDomain: "slate-8d1bb.firebaseapp.com",
            databaseURL: "https://slate-8d1bb.firebaseio.com",
            projectId: "slate-8d1bb",
            storageBucket: "slate-8d1bb.appspot.com",
            messagingSenderId: "32453220367",
            appId: "1:32453220367:web:7925f428e7ef850ec3eb7a",
            measurementId: "G-6NCCQCB780"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);

          firebase.database().ref('users').on('value', (data) =>  {
              data.toJSON;
          })
    }


    constructor (props) {
        super(props);
        this.state={};

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

                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Pastdays')}}>
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
  