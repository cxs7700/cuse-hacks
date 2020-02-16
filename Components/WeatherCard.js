import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native'
import styled from 'styled-components'

// Receives props as data
const WeatherCard = props => {
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let date = new Date(props.date*1000).getDay();
  
  let sourceImage = ''
  if (props.condition == "Snow") {
    sourceImage = require('../assets/snow.png')
  } else if (props.condition == 'Thunderstorm') {
    sourceImage = require('../assets/cloud.png')
  } else if (props.condition == 'Clouds') {
    sourceImage = require('../assets/cloud.png')
  } else if (props.condition == 'Rain') {
    sourceImage = require('../assets/rain.png')
  } else if (props.condition == 'Clear') {
    sourceImage = require('../assets/sunny.png')
  } else {sourceImage = require('../assets/else.png')}
  
  return (
    <Container>
      <Cover>
        <Image source={sourceImage} />
        <Weekday>{days[date]}</Weekday>
        <Temperature>{Math.floor(props.temp) + 'ºF'}</Temperature>
        <Condition>{props.condition}</Condition>
      </Cover>
    </Container>
  )
}

const Container = styled.View`
  background: white;
  width: 200px;
  height: 250px;
  border-radius: 15px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
`
  
const Cover = styled.View`
  width: 100%;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
`
  
const Image = styled.Image`
  width: 200px;
  height: 250px;
  border-radius: 15px;
`
  
const Weekday = styled.Text`
  color: black;
  font-size: 26px;
  font-weight: bold;
  position: absolute;
  top: 20px;
  margin-left: 20px;
`

const Temperature = styled.Text`
  font-size: 16px;
  position: absolute;
  top: 50px;
  left: 20px;
  font-weight: 500;
  color: white;
`

const Condition = styled.Text`
  font-size: 24px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-weight: 500;
`

export default WeatherCard