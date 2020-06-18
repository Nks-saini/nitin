import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
  AsyncStorage,
} from "react-native";
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Icon,
  Text,
  Button,
} from "native-base";
import { Actions } from "react-native-router-flux";
import Home from "./Home";

import Menu from "./Menu";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loggedIn: false,
      //data1:''
    };
  }

  onLogin() {
    // const { username, password } = this.state;

    if (this.state.username && this.state.password) {
      let formdata = new FormData();
      formdata.append("username", this.state.username);
      formdata.append("password", this.state.password);
      console.log(formdata);
      fetch("https://www.tjori.com/api/user/authenticate/", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formdata,
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.id) {
            // console.log(responseJson);
            AsyncStorage.setItem("token", JSON.stringify(responseJson));
            Actions.home();
          } else {
            alert("username & password inccorect");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("Please Fill  username & password ");
    }
  }

  render() {
    if (this.state.loggedIn) {
      return <Home />;
    }

    return (
      <Container>
        <View style={styles.container}>
          <View>
            <Image
              style={{ width: 180, height: 140 }}
              source={require("./img/n.png")}
            />
          </View>

          <Text style={styles.instruction}>VENDOR </Text>

          <KeyboardAvoidingView behavior="padding" enabled>
            <View style={styles.btnContainer}>
              <Item rounded style={styles.box1}>
                <Icon active name="person" />
                <Input
                  style={styles.input}
                  value={this.state.username}
                  onChangeText={(username) => this.setState({ username })}
                  placeholder={"Username"}
                />
              </Item>

              <Item rounded style={styles.box1}>
                <Icon active name="lock" />
                <Input
                  style={styles.input}
                  onChangeText={(password) => this.setState({ password })}
                  placeholder={"Password"}
                  secureTextEntry={true}
                />
              </Item>

              <TouchableOpacity
                style={styles.userBtn}
                onPress={this.onLogin.bind(this)}
              >
                <Text style={styles.btnTxt}>LOGIN</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: "space-between",
    padding: 15,
  },

  container: {
    flex: 1,
    backgroundColor: "#C1B497",
    alignItems: "center",
    justifyContent: "center",
  },
  btnTxt: {
    textAlign: "center",
    height: 16,
    fontSize: 15,
    color: "white",
  },
  userBtn: {
    backgroundColor: "#0D5435",
    padding: 15,
    borderRadius: 20,
  },
  instruction: {
    color: "#ffff",
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  box1: {
    height: 40,
    marginBottom: 13,
    backgroundColor: "white",
    width: 300,
  },
});

// fetch('https://www.tjori.com/api/user/user/'+userdata.id+'/?format=json')
