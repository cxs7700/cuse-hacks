import React from 'react'
import { View, Text } from 'react-native'
import { Animated } from 'react-animated-css'
import styled from 'styled-components'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Doggo = props => {
  
  
  
  return (
    <Container>
      <Image source={props.source} />
    </Container>
  )
}

const DoggoMessage = props => {
  
}


const Container = styled.View`
    flex-direction: column;
    flex: 1;
    position: absolute;
    bottom: -85;
    right: 15;
    box-shadow: 0 5px 15px rgba(0,0,0,0.15);
  `
  
  const Image = styled.Image`
    width: 75px;
    height: 80px;
    align-self: flex-end;
  `

export default Doggo