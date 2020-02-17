import React from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import styled from 'styled-components';
import PastdayCard from './PastdayCard';
import Home from './Home';
import {Navigation} from '@react-navigation/native';
import {createStackNavigator, StackView} from '@react-navigation/stack';
import {TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';

const navigate = ({ Navigation }) => {

}

export default class Pastday extends React.Component{    
    // componentDidMount() {
    //     this.getData()
    // }
    
    // getData = async() => {
    //     const ref = firebase.database().ref('users');
    //     const snapshot = await ref.orderByKey().endAt('004').once('value');
        
    //     console.log(snapshot.val()['004'])
    // }
    
    render() {
        return(
            
            <Container>
            <ScrollView>
                <TitleBar>
                    <Title >Past Days</Title>
                </TitleBar>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Single Past Day')}}>
                    <PastdayCard title='Tuesday' source={require('../assets/sunny.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Single Past Day')}} >
                    <PastdayCard title='Wednesday' source={require('../assets/snow.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Single Past Day')}} >
                    <PastdayCard title='Thursday' source={require('../assets/rain.png')}/>
                </TouchableOpacity>

            </ScrollView>
         </Container>
        )
        
        
        }
    }



const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  
`

const Title = styled.Text`
  font-size: 60px;
  color: black;
  font-weight: bold;
  text-align: left;
  padding-left: 20px; 
`
const Container = styled.View`
  flex: 1;
  background-color: white;
  padding-left: 10px;


`
