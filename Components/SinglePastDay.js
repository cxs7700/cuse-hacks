import React from 'react'
import { View } from 'react-native'
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
      location: '',
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
    this.setState({
      work: snapshot.val()['004'].name,
      time: snapshot.val()['004'].time,
    })
  }
  
  getLocation = async() => {
    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&key=AIzaSyB7sYZ5Z-Fulka9Pw6KGE-P3w6bWTC7Xgg`)
      .then(res => {
        this.setState({
          location: res.data.formatted_address
        })
      })
  }
  
  render() {
    
    return(
      <View>
        <Location>{this.state.location}</Location>
        <Work>{this.state.work}</Work>
        <Time>{this.state.time}</Time>
      </View>
    )
  }
}

const Location = styled.Text`

`

const Work = styled.Text`

`

const Time = styled.Text`

`