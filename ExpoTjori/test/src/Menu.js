import React, { Component } from 'react';
import { Text, View ,AsyncStorage } from 'react-native';
import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

import Login from './Login'

export default class Menu extends Component {

  logout()
  {
    // console.log("logout //")
    try {
         AsyncStorage.removeItem('token')
         console.log("logout token work")
         Actions.login();
      } catch (err) {
        console.log(err)
      }
  }
 
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{fontSize:20}}>Logout </Text>
        <Text style={{fontSize:20}}>Welcome  Vendor</Text>      
        <Button primary><Text onPress={this.logout}> SIGN OUT </Text></Button>         
      </View>
    );
  }
}

