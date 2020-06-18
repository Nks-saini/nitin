import React, { Component } from 'react';
import { StyleSheet,View,TouchableOpacity, Image,ActivityIndicator,StatusBar,AsyncStorage} from 'react-native';
import { Container, Header, Content, Item, Input, Icon,Text,Button ,} from 'native-base';
import {createSwitchNavigator,createStackNavigator ,createAppContainer} from 'react-navigation'


const userInfo = {username:'admin',password:'12345'};

export default class Login extends Component {
constructor(){
  super();
  this.state={
    username:"",
    Password:""
  }
  this.handle = this.handle.bind(this);
}


  handle(event){
    console.log(event.traget.value)
  }


  render() {
    return (
      <Container>
     
        <View style={styles.container}>
         

        <View>
        <Image
          style={{width: 180, height: 140}}
          source={require('./img/n.png')}
        />
        </View>

        <Text style={styles.instruction}>VENDOR </Text>

        <View style={styles.btnContainer}>
            
        <Item rounded style={styles.box1}>
            <Icon active name='person' />
            <Input placeholder="Username" style={styles.input}
            value={this.state.username}
             onChangeText={(username)=> this.setState({username})}/>
          </Item>
          
          <Item rounded style={styles.box1}>
            <Icon active name='lock' />
            <Input placeholder="Password" style={styles.input}
             value={this.state.Password}
             secureTextEntry={true}
             onChangeText={(Password)=> this.setState({Password})}/>
          </Item>
          
          <TouchableOpacity style={styles.userBtn} onPress={() => alert("Login Works")}>
        <Text style={styles.btnTxt} onPress={this.handle()}>LOGIN</Text>
        </TouchableOpacity> 

        <Text>{this.state.data}</Text>
        </View>
      
      
          
        </View>
      </Container>
    );
  }
}

sign = async () => {
  if(userInfo.username === this.status.username && userInfo.password === this.password){
    alert('logged');
  }
  else{
    alert('username or password incorrect')
  }
}

class HomeScreen extends React.Component {
  render(){
    return(
      <View>
      <Text>Welcome Home page</Text>
    </View>
    )  
  }
}

class AuthLoadingScreen extends React.Component {
  render(){
    return(
      <View>
        <ActivityIndicator/>
        
      <Text>AuthLoadingScreen</Text>
    </View>
    )  
  }
}




const styles = StyleSheet.create({
 

    btnContainer:{
        justifyContent:"space-between",
        width:"100%",
        padding:15,
      
      }, 

      container: {
        flex: 1,
        backgroundColor: '#C1B497',
        alignItems: 'center',
        justifyContent: 'center',
    
      },
      btnTxt:{
        textAlign:"center",
        height:16,
        fontSize:15,
        color:"white"
    },
    userBtn:{
        backgroundColor:"#0D5435",
        padding:15,
        borderRadius:20,
        width:"100%"
      },
     instruction:{
         color:"#ffff",
         marginBottom:10,
         fontSize:20,
         fontWeight:"bold"        
     },
     box1:{
         height:40,
         marginBottom:12,
         backgroundColor:"white"
     }
  
     
  });
  