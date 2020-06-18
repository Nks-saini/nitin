import React, { Component } from 'react';
import { StyleSheet,View,TouchableOpacity, Image,Alert} from 'react-native';
import { Container, Header, Content, Item, Input, Icon,Text,Button} from 'native-base';


export default class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;
    console.log()
   // Alert.alert('Credentials', `${username} + ${password}`);
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
            <Input style={styles.input} 
           value={this.state.username}
           onChangeText={(username) => this.setState({ username })}
           placeholder={'Username'}
           />
          </Item>
          
          <Item rounded style={styles.box1}>
            <Icon active name='lock' />
            <Input  style={styles.input} 
            onChangeText={(password) => this.setState({ password })}
            placeholder={'Password'}
            secureTextEntry={true}
            />
          </Item>
          
          <TouchableOpacity style={styles.userBtn} onPress={this.onLogin.bind(this)}>
        <Text style={styles.btnTxt}>LOGIN</Text>
        </TouchableOpacity> 
   
        </View>
              
        </View>
      </Container>
    );
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
  