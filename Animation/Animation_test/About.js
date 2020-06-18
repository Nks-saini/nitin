import React, { Component } from 'react';
import { Animated, Text, View ,StyleSheet,TouchableOpacity} from 'react-native';

export default class About extends Component {
  constructor(){
    super()
    this.state={
      fade: new Animated.Value(0),
    }
  }


fadeAnimation = () => {
    Animated.timing(this.state.fade,{
      toValue:2,
      duration:1000,
    }).start()
}







  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
       <Animated.View style={[styles.animationViews,
                            {opacity:this.state.fade},
        ]}>
      
       </Animated.View>

                <TouchableOpacity style ={styles.button}
                        onPress={this.fadeAnimation }
                >
                    <Text style={styles.buttonText}>click animate</Text>

                </TouchableOpacity>
        
      </View>
    );
  }
}



const styles = StyleSheet.create({

  animationViews:{
      width:100,
      height:100,
      backgroundColor:'skyblue',
  },
  button:{
    backgroundColor:"steelblue",
    height:45,
    marginTop:20,
    alignSelf:"center"
},
buttonText:{
    color:'white',
    padding:12,
    paddingHorizontal:20,
    fontWeight:'bold',
    fontSize:18
},
})

