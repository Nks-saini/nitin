import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text, View, Root } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Router, Scene } from 'react-native-router-flux';


import Home from './src/Home'
import Login from './src/Login'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Root>
      <Router>
           
           <Scene key="root">
             <Scene key="home"
               component={Home} 
               hideNavBar={true}              
               initial
             />

             <Scene
              key="login"              
              component={Login}
              title="Gray"
              hideNavBar={true}
             
              />
           
           </Scene>
         </Router>
         </Root>
    );
  }
}
