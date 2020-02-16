import React from 'react';
import styled from 'styled-components'
import { Text, View , TouchableOpacity } from 'react-native';

const HeaderCard = (props) => {
    return (
      
        <Container>
          <Cover>
            <Image source={props.source} />
            <Title>{props.title}</Title>
          </Cover>
        </Container>
      
    )
  };
  
  const Container = styled.View`
    width: 155px;
    border-radius: 20px;
    height: 10px;
    margin-left: 20px;
    margin-top: 20px; 
    box-shadow: 0 5px 15px rgba(0,0,0,0.15);
  `
  
  const Cover = styled.View`
    width: 100%;
    height: 50px;
    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
    border-bottom-left-radius: 11px;
    border-bottom-right-radius: 11px;
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
    color: white;
    font-size: 20px;
    font-family: 'Avenir';
    font-weight: bold;
    margin-top: 15px;
    margin-left: 30px;
    width: 170px;
  `
  
  export default HeaderCard;