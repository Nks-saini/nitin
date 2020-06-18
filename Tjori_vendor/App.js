import React, {Component} from 'react';
// import { Text, View ,ScrollView,Image,ActivityIndicator,AsyncStorage} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

import Home from './Home';
import Detail from './Detail';

export default class HelloWorldApp extends Component {
  constructor() {
    super();
    this.state = {
      dataTjori: [],
    };
  }

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="scarlet" component={Home} hideNavBar={true} initial />
          <Scene key="gray" component={Detail} title="Gray" />
        </Scene>
      </Router>
    );
  }
}
