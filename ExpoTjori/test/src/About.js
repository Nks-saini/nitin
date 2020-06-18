import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'


export default class About extends React.Component{

   goToHome(){
      Actions.home()
   }


render(){
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {this.goToHome}>
         <Text>This is ABOUT</Text>
      </TouchableOpacity>
   )
}
}
