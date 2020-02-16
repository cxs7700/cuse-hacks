import React from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const PastdayCard = (props) => (
      <Container>
        <Cover>
          <Image source={props.source} />
          <Title>{props.title}</Title>
        </Cover>
      </Container>
  );

const Container = styled.View`
  background: white;
  width: 315px;
  height: 200px;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
`

const Image = styled.Image`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
`

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-left-radius: 14px;
  overflow: hidden;
`
const Title = styled.Text`
  color: black;
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`



export default PastdayCard;