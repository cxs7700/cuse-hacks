import React from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import styled from 'styled-components';
import { FormLabel, FormInput, FormValidationMessage,Input } from 'react-native-elements'

const navigate = ({ Navigation }) => {

}

export default class Newday extends React.Component {
    render(){
        return(
            <Container>
                <ScrollView>
                 <TitleBar>
                    <Title>Fill it out!</Title>
                    
                    
                </TitleBar>
                
                <Input placeholder='What?'/>
                <Input placeholder='Where?'/>
                <Input placeholder='When?'/>
                <Button title=" Submit" onPress={() => {this.props.navigation.navigate('Welcome')}}> </Button>
            
              </ScrollView>
              
            </Container>
            
        )
      }
    }      

        
    


const TitleBar = styled.View`
  width: 100%;
  margin-top: 20px;
  padding-bottom: 30px;
  
`

const Title = styled.Text`
  font-size: 30px;
  color: black;
  font-weight: bold;
  text-align: center;
`
const Container = styled.View`
  flex: 1;
  background-color: white;
  padding-left: 10px;


`


