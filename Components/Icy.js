import React from 'react'
import { View, Text } from 'react-native'
import { Animated } from 'react-animated-css'
import styled from 'styled-components'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Icy = (props) => {
  return (
    <Container>
      {/* <DoggoMessage currentTemp={props.weather.main['temp']} /> */}
      <Image source={props.source} />
    </Container>
  )
}

const DoggoMessage = props => {
  let message = ''
  if (props.currentTemp < 35) {
    message = "It's a bit chilly out. Dress warm!"
  }
  
  return (
    <Text>
      { message }
    </Text>
  )
}


const Container = styled.View`
    flex-direction: column;
    flex: 1;
    position: absolute;
    bottom: -70px;
    right: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.15);
  `
  
  const Image = styled.Image`
    width: 75px;
    height: 80px;
    align-self: flex-end;
  `

export default Icy