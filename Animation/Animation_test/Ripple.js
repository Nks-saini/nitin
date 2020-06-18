import React, { Component } from 'react';
import { StyleSheet,View,Text,Animated,} from 'react-native';

export default class Ripple extends Component{
    state={
        animated: new Animated.Value(0),
    }

    componentDidMount(){
        const {animated} = this.state;

        Animated.timing(animated, {
            toValue:1,
            duration:1000,
        }).start()
    }


    render(){
        return(
            <View style={styles.container}>
                <Animated.View>
                    style={{width:100,height:100,bord}}
                </Animated.View>
            </View>
        )
    }
}


const styles = StyleSheet.create({

    container:{
        flex: 1,
        flexDirection:'center',
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:'cornflwerblue',
    }
})