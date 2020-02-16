import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { Value } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components';


export default function NewdayForm() {
   return (
      <Container> 
         <ScrollView>
            
         </ScrollView>
      </Container>
      

   );

}
const Container = styled.View`
  background: white;
  width: 315px;
  height: 200px;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
`
