import React from './node_modules/react';
import { TouchableOpacity, View, Text } from 'react-native'
import styled from './node_modules/styled-components'

// Receives props as data
const WeatherCard = props => {
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let date = new Date(props.date*1000).getDay();
  
  return (
    <Container>
      <Cover>
        <Title>{days[date]}</Title>
        <Title>{Math.floor(props.temp) + 'ºF'}</Title>
        <Title>{props.condition}</Title>
      </Cover>
    </Container>
  )
}

const Container = styled.View`
  background: white;
  width: 200px;
  border-radius: 15px;
  height: 300px;
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
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`
  
const Title = styled.Text`
  color: black;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`

export default WeatherCard