import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
      backgroundColor="#1e90ff"
      barStyle="light-content"
      />

      <Text style={styles.welcome}>Login To my App</Text>
      <Text style={styles.instruction}>To get started  </Text>

      <TextInput 
      style={styles.input}
      placeholder="Username"
      secureTextEntry
      />

      <TextInput 
      style={styles.input}
      placeholder="Password"
      />


    <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.userBtn} onPress={() => alert("Login Works")}>
        <Text style={styles.btnTxt}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.userBtn} onPress={() => alert("SignUp Works")}>
        <Text style={styles.btnTxt}>signUp</Text>
        </TouchableOpacity>
        
     

      
    </View>

    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome:{
    fontSize:30,
    textAlign:'center',
    margin:10,
    color:"#fff"
  },
  input:{
    width:"90%",
    backgroundColor:"#fff",
    padding:15,
    marginBottom:10
  },

btnContainer:{
  flexDirection:"row",
  justifyContent:"space-between",
  width:"90%"
},

  userBtn:{
    backgroundColor:"#FFD700",
    padding:15,
    width:"45%"
  },
  
});
