import React from 'react'
import styled from 'styled-components'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import WeatherCard from './WeatherCard';
import axios from 'axios'

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
    for (let i = 1; i < data.length; i += 8) {
      arr.push(data[i])
    }
    return arr
  }
  
  render() {
    
    return(
      <ScrollView>
        {
          this.state.weather.map((forecast,index) => {
            return ( 
              <WeatherCard 
                key={index} 
                date={forecast.dt_txt} 
                temp={forecast.main['temp']} 
                condition={forecast.weather[0]['main']}
              /> 
            )
          })
        }
      </ScrollView>
    )
  }
}