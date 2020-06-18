import React, { Component } from 'react'
import { View, StyleSheet, Animated, Text,Easing, } from 'react-native'

export default class Animation3 extends Component {
  constructor(){
     super()

     var animatedValues = [];
     for(var i=0;i<1000;i++){
        animatedValues.push(new Animated.Value(0));
     }
     this.state={
        animatedValues: animatedValues
     };
  }


  componentDidMount(){
     this.staggerAnimate();
  }


  staggerAnimate = () =>{
     const animations = this.state.animatedValues.map((animatedValues) => { 
        //convert animatedValues to animate.timing
      return Animated.timing(
         animatedValues,
         {
            toValue:1,
            duration:3000,//3 second
         }
      )
     });
     Animated.stagger(10,animations).start();//animation start, after 10ms ,animation start,.... 
  }

render(){
   const animatedViews = this.state.animatedValues.map((animatedValues,i) =>{
      return <Animated.View
               key={i}
               style={[styles.animatedView,{
                  opacity:animatedValues,
               }]}
            />
   })
   return(
      <View style={styles.container}>
         {animatedViews}
      </View>
   )
}

}


const styles = StyleSheet.create({
   container:{
      flex:1,
      flexDirection:'row',
      flexWrap:'wrap',
      marginVertical:40
   },
   animatedView:{
      height:20,
      width:20,
      backgroundColor:'red',
      margin:3
   }
})
 



