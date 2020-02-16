import React from 'react'
import { ScrollView } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { render } from 'react-dom';
import axios from 'axios'
import firebase from 'firebase';
import styled from 'styled-components'

// Needs to get mounted before testing for data
export default class SinglePastDay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: null,
      latitude: 43,
      longitude: -76,
      work: '',
      time: null
    }
  }

  componentDidMount() {
    this.getGeolocation()
    this.getData()
    this.getLocation()
  }
  
  getGeolocation = async() => {
    let result = await axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyB7sYZ5Z-Fulka9Pw6KGE-P3w6bWTC7Xgg')
      .then(res => {
        this.setState({
          latitude: res.data.location.lat,
          longitude: res.data.location.lng
        })   
      })
      .catch(err => console.log(err.response))
  }

  getData = async() => {
    const ref = firebase.database().ref('users');
    const snapshot = await ref.orderByKey().endAt('004').once('value');
    console.log(snapshot.val()['004'])
    this.setState({
      work: snapshot.val()['004'].name,
      time: snapshot.val()['004'].time,
    })
  }
  
  getLocation = async() => {
    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&key=AIzaSyB7sYZ5Z-Fulka9Pw6KGE-P3w6bWTC7Xgg`)
      .then(res => {
        this.setState({
          // location: res.data.formatted_address
          location: snapshot.val()['004'].latitude,//[snapshot.val()['004'].latitude, snapshot.val()['004'].latitude],

        })
      })
  }
  
  render() {
    
    return(
      <ScrollView>
        <Container>
          <Cover>
            <Image source={require('/Users/samin/Desktop/cuse/cuse-hacks/assets/86498079_597903351060007_3048092995246096384_n.png')} />
            <Location>{this.state.location}</Location>
            <Work>{this.state.work}</Work>
            <Time>{this.state.time}</Time>
          </Cover>
        </Container>
      </ScrollView>
    )
  }
}

const Image = styled.Image`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
`

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-left-radius: 14px;
  overflow: hidden;
`

const Container = styled.View`
  background: white;
  width: 315px;
  height: 200px;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
`

const Location = styled.Text`
  color: black;
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 220px;
  width: 170px;
  font-family: 'Avenir';

`

const Work = styled.Text`
  color: black;
  font-size: 30px;
  font-weight: bold;
  margin-top: 50px;
  margin-left: 220px;
  width: 170px;
  font-family: 'Avenir';

`

const Time = styled.Text`
  color: black;
  font-size: 30px;
  font-weight: bold;
  margin-top: 30px;
  margin-left: 220px;
  width: 170px;
  font-family: 'Avenir';

`