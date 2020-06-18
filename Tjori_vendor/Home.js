import React, {Component} from 'react';
import {Text, View, ScrollView, Image, ActivityIndicator,TouchableOpacity} from 'react-native';

import {Actions} from 'react-native-router-flux'; // New code
import AsyncStorage from '@react-native-community/async-storage';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      islod: true,
      dataTjori: [],
      namedata: [],
    };
  }

  componentDidMount() {
    fetch('https://api.tjori.com/api/v3/?format=json')
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson.data)
        this.setState({
          islod: false,
          dataTjori: responseJson.data,
        });
        this.store1();
      });
  }

  store1 = () => {
    var data = this.state.dataTjori;
    var myloop = [];
    for (let index = 0; index < data.length; index++) {
      if (data[index].type === 'collection') {
        myloop.push(data[index].name);
        //console.log(data[index].name);
      }
    }
    console.log(myloop);
    AsyncStorage.setItem('mykey', JSON.stringify(myloop));//only name store in async
    this.setState({
      namedata: myloop,
    });
  };

  //slider products...
  render_Products(data) {
    //console.log(data)
    return (
      <View onPress={() => Actions.gray()}>
        <ScrollView horizontal={true}>
          {data.map((item, index) => {
            return (
              <View
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  height: 290,
                  width: 150,
                }}>
                <Image
                  style={{
                    width: 150,
                    height: 220,
                    borderRadius: 4,
                    marginBottom: 10,
                  }}
                  source={{uri: item.cdn_small_image}}
                />
                <Text
                  style={{
                    fontSize: 10,
                    color: 'red',
                    textAlign: 'center',
                    paddingLeft: 2,
                  }}>
                  {item.name}
                </Text>
                <Text
                  onPress={() => Actions.gray()}
                  style={{
                    paddingLeft: 2,
                    textAlign: 'center',
                    marginBottom: 10,
                  }}>
                  {item.special_price}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }

  render() {
    if (this.state.islod) {
      return <ActivityIndicator size="large" color="red" />;
    }

    return (
      <View onPress={() => Actions.gray({namedata: this.state.namedata})}>
        <ScrollView>
          {this.state.dataTjori.map((item, index) => {
            if (item.type === 'collection') {
              return (
                <View key={index}>
                  <View style={{marginLeft: 10, marginRight: 10}}>
                    <Text
                      onPress={() =>
                        Actions.gray({namedata: this.state.namedata})
                      }
                      style={{
                        fontSize: 25,
                        color: 'green',
                        textAlign: 'center',
                        paddingLeft: 2,
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        paddingLeft: 2,
                        textAlign: 'center',
                        marginBottom: 10,
                      }}>
                      {item.subtitle}
                    </Text>
                    <Image
                      onPress={() =>
                        Actions.gray({namedata: this.state.namedata})
                      }
                      style={{
                        width: 340,
                        height: 340,
                        borderRadius: 8,
                        marginBottom: 30,
                      }}
                      source={{uri: item.cover_image}}
                    />
                  </View>
                  {this.render_Products(item.data)}
                </View>
              );
            }
          })}
        </ScrollView>
      </View>
    );
  }
}
