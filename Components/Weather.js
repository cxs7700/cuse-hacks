import React from 'react'
import styled from 'styled-components'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import WeatherCard from './WeatherCard';
import axios from 'axios'
import Icy from './Icy'

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 43,
      longitude: -76,
      weather: [],
    }
    
  }
  
  componentDidMount() {
    this.getGeolocation()
    this.getWeather()
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
  
  getWeather = async() => {
    let result = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.latitude}&lon=${this.state.longitude}&cnt=35&units=imperial&appid=513f75fdb1c43d93d9ab127d64bc9808`)
      .then(res => {
        this.setState({
          weather: this.manipulateData(res.data.list)
        })
      })
      .catch(err => console.log(err.response))
  }
  
  manipulateData = data => {
    let arr = []
    for (let i = 0; i < data.length; i += 8) {
      arr.push(data[i])
    }
    return arr
  }
  
  render() {
    return(
      <View style={{paddingTop: 50}}>
        <ScrollView style={{ flexFlow: "row", padding: 10, paddingBottom: 30, paddingLeft: 0, paddingTop: 30 }} horizontal={true} showsHorizontalScrollIndicator={false}>
        {
            this.state.weather.map((forecast,index) => {
              return ( 
                <WeatherCard 
                  key={index} 
                  date={forecast.dt} 
                  temp={forecast.main['temp']} 
                  condition={forecast.weather[0]['main']}
                /> 
              )
            })
          }
        </ScrollView>
        <Icy source={require('../assets/doggo.png')}/>
      </View>
    )
  }
}