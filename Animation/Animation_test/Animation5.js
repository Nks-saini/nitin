import React,{Component} from 'react'
import {View ,Text,StyleSheet, ScrollView,Image,
Animated,
} from 'react-native'



HEADER_MAX_HEIGHT = 120
HEADER_MIN_HEIGHT = 70
PROFILE_IMAGE_MAX_HEIGHT = 80
PROFILE_IMAGE_MIN_HEIGHT = 40

class App extends Component{
  constructor(props){
    super(props)

    this.state={
      scrollY: new Animated.Value(0)
    }
  }
render(){

  const headerheight = this.state.scrollY.interpolate({
    inputRange:[0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
    outputRange:[HEADER_MAX_HEIGHT,HEADER_MIN_HEIGHT]
  })
    return(
        <View style={{flex:1}}>
            <Animated.View style={{
                position:'absolute',
                top:0,
                left:0,
                right:0,
                backgroundColor:'lightskyblue',
                height: headerheight
            }}>

            </Animated.View>
            
            <ScrollView style={{flex:1}}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{nativeEvent: { contentOFFset: { y: this.state.scrollY}}}],
              
            )}
            >
                <View style={{
                        height:PROFILE_IMAGE_MAX_HEIGHT,
                        width:PROFILE_IMAGE_MAX_HEIGHT,
                        borderRadius:PROFILE_IMAGE_MAX_HEIGHT /2,
                        borderColor:'white',
                        borderWidth:3,
                        overflow:'hidden',
                        marginTop:HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HEIGHT/2),
                        marginLeft:10
                }}>
                  <Image source={require('./img/c1.jpg')} style={{flex:1,width:null,height:null}}
                  ></Image>
                </View>
                  <View><Text style={{fontSize:26,paddingLeft:10,fontWeight:'bold'}}>Jakki Singh</Text></View>
            </ScrollView>
        </View>
    )
}
} 

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center'
    }
})

export default App