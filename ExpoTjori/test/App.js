import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text, View, Root } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Router, Scene,Actions } from 'react-native-router-flux';
import {AsyncStorage,Icon} from 'react-native';

import Login from './src/Login'
import Profile from './src/Profile'
import Menu from './src/Menu'


import Home from './src/Home'
import Img from './src/Image';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      route: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });

    //get token
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        // We have data!!
        this.setState({ route: true });
       // console.log(value);
      } else {
        this.setState({ route: false });
      }
    } catch (error) {
      // Error retrieving data
      this.setState({ route: false });
      console.log(error);
    }
  }


  render() {
    console.log("===========================")
    //console.log(this.state.route)
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Root>
      <Router>
           
           <Scene key="root">
           <Scene key="main"  tabs={true} hideNavBar={true}  default="home" initial={this.state.route ? true : false}  >

                    <Scene key = "home" icon={Homeicon}>
                            <Scene key = "home1" component = {Home} title = "Home" initial = {true}  hideNavBar={true}/>
                            {/* <Scene key = "about" component = {About} title = "About" /> */}
                            <Scene key = "image" component = {Img} title = "IMAGE"/>
                    </Scene>


                <Scene  key="profile"
                      title="Profile"
                      hideNavBar={true}
                      component={Profile}
                      icon={Profileicon}
                        />
                <Scene  key="menu"
                      title="Menu"
                      hideNavBar={true}
                      component={Menu}
                      icon={Menuicon}
                        />
           </Scene>

             <Scene
              key="login"              
              component={Login}
              title="Gray"
              hideNavBar={true}
              initial={this.state.route ? false : true}
              />
           
           </Scene>
         </Router>
         </Root>
    );
  }
}




class Homeicon extends React.Component {
  render() {
    return <Ionicons name="md-home" size={22} color="#446600" />;
  }
}

class Profileicon extends React.Component {
  render() {
    return <Ionicons name="md-contact" size={22} color="#00bfff" />;
  }
}

class Menuicon extends React.Component {
  render() {
    return <Ionicons name="md-albums" size={22} color="#9f6060" />;
  }
}