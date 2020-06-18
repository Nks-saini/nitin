import React, {Component} from 'react';
import {Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Detail extends Component {
  state = {
    item: [],
    item2: [],
  };

  componentDidMount() {
    AsyncStorage.getItem('mykey', (err, res) => {
      if (!res) {
        console.log('notfound');
      } else {
        console.log(res);

        this.setState({
          item: res,
          item2: this.props.namedata,
        });
        console.log('bjhsdvjhasdbh,bh');
        console.log(this.state.item2);
      }
    });
  }

  render() {
    return (
      <View>
        <Text> AsyncStorage Details page</Text>
        <Text>{this.state.item}</Text>
        <Text>{this.state.item2}</Text>
      </View>
    );
  }
}
