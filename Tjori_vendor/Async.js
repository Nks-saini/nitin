import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Async extends Component {
  constructor() {
    super();
    this.state = {
      name: [],
    };
  }

  componentDidMount() {
    fetch('https://api.tjori.com/api/v3/?format=json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          name: responseJson.data,
        });
      });
  }

  render() {
    return (
      <View
        style={{
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
          height: 340,
        }}>
        <Text> Hello, world!</Text>
      </View>
    );
  }
}
