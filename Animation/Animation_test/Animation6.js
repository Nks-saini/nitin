import React, {  Component } from 'react';
import { Animated, Platform, Text, View,StyleSheet, TouchableOpacity, Easing,Dimensions,Image} from 'react-native';

var {width,height} = Dimensions.get('window');


export default class Animation5 extends Component{
    constructor(props){
        super(props)
        this.state={
            fadeValue: new Animated.Value(0),
            xValue: new Animated.Value(0),
            springValue: new Animated.Value(0.5),
            rotateValue: new Animated.Value(0),
        }      
    }

    // fadeAnimation = () => {
    //     Animated.timing(this.state.fadeValue, {
    //         toValue:1,
    //         duration:1000,
    //     }).start();
    // }



   // move animation 
   moveAnimation =() => {
    Animated.timing(this.state.xValue, {
        toValue:width-100,
        duration:1000,
         easing:Easing.linear(),
        //  easing:Easing.back(),
        // easing:Easing.cubic,
    }).start(() =>{
        //call after finished the animation !
        Animated.timing(this.state.xValue, {
         toValue:0,
          duration:1000,
         easing:Easing.linear(),
        //  easing:Easing.back(),
     //delay : 1000, run after 1 sec
          }).start(() =>{
          this.moveAnimation();
         })
    });
   } 


  //spring animation 
springAnimation = () =>{
    Animated.spring(this.state.springValue,{
        toValue:1,
        friction:1,
    }).start();
}


//rotate animation
rotateAnimation = () =>{
    Animated.sequence([
        Animated.timing(this.state.rotateValue,{
            toValue:100,
            duration:1000,
            easing:Easing.linear,
        }),
        Animated.timing(this.state.rotateValue, {
            toValue:0,
            duration:0,
        }),
    ]).start(() =>{
        this.rotateAnimation(); //rotate infinitely
    });
}

moveAndRotateAnimation = () =>{
    Animated.parallel([
        this.moveAnimation(),
        //this.rotateAnimation()
    ]).start();
}

    render(){

        //its a part of rotate animation
        const interpolatedRotateAnimation = this.state.rotateValue.interpolate({
            inputRange:[0,100],
            outputRange:['0deg','360deg'],
        })


        return(
            <View style={styles.container}>
                {/* <Animated.View style={[styles.animationViews,
                    // {opacity: this.state.fadeValue}
                     {left : this.state.xValue} 
                ]}> 

                </Animated.View> */}
                <Animated.Image
                    source={require('./img/c1.jpg')}
                    style={[styles.imageView, 
                    { left : this.state.xValue},
                    // {transform : [{ scale : this.state.springValue }],
                    // alignSelf:'center'}
                    {transform: [{ rotate: interpolatedRotateAnimation}]},
                ]} >
                </Animated.Image>

                <TouchableOpacity style ={styles.button}
                onPress={this.moveAndRotateAnimation}
                >
                    <Text style={styles.buttonText}>Animate</Text>

                </TouchableOpacity>
            </View>
        )
    }
}




const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        // alignItems:'center',
    },
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
    imageView:{
        height:100,
        width:100
    }
})