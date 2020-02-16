import React from 'react'
import { View, Text } from 'react-native'
import { Animated } from 'react-animated-css'
import styled from 'styled-components'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Icy extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPressed: false
    }
  }
  
  
  render() {
    return (
      <Container>
        <TouchableOpacity onPress={() => this.setState({isPressed: !this.state.isPressed})}>
          <Image source={this.props.source} />
        </TouchableOpacity>
        {
          this.state.isPressed ? (
            <MessageContainer>
              <DoggoMessage message="You're in for a " />
              <DoggoMessage message="great day!" />
              {/* <Arrow /> */}
            </MessageContainer>
          ) : (
            <></>
          )
        }
        {/* <MessageContainer>
          <DoggoMessage message="You're in for a " />
          <DoggoMessage message="great day!" />
        </MessageContainer> */}
      </Container>
    )
  }
}

const DoggoMessage = props => {
  return (
    <View>
      <Text>{ props.message }</Text>
    </View>
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
  
  const MessageContainer = styled.View`
    background-color: white;
    color: black;
    width: 120px;
    height: 50px;
    right: 100px;
    bottom: 20px;
    padding: 10px;
    border-radius: 15px;
    text-align: center;
    position: absolute;
  `
  
  // const Arrow = styled.View`
  //   width: 0;
  //   height: 0;
  //   top: -7px;
  //   right: 98px;
  //   position: absolute;
  //   border-style: solid;
  //   border-left-width: 5px;
  //   border-left-color: rgba(158, 150, 150, 0);
  //   border-right-width: 5px;
  //   border-right-color: #ffffff;
  //   border-bottom-color: rgba(158, 150, 150, 0);;
  //   border-bottom-width: 5px;
  //   border-top-color: rgba(158, 150, 150, 0);
  // `