import React from 'react';
import { TouchableOpacity, ScrollableView, Text } from 'react-native'
import styled from 'styled-components'

// Receives props as data
const WeatherCard = props => {
  
  return (
    <TouchableOpacity>
      <Container>
        <Cover>
          <Title>{props.date}</Title>
          <Title>{Math.floor(props.temp)}</Title>
          <Title>{props.condition}</Title>
        </Cover>
      </Container>
    </TouchableOpacity>
  )
}


const Container = styled.View`
    background: white;
    width: 315px;
    border-radius: 15px;
    height: 280px;
    margin-left: 20px;
    margin-top: 20px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.15);
  `
  
  const Cover = styled.View`
    width: 100%;
    height: 200px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    overflow: hidden;
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