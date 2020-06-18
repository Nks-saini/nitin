import React, { Component } from 'react';
import { Paltform,Text, View ,AsyncStorage,ScrollView,Image,Button,TouchableOpacity} from 'react-native';
import { Container, Header,  Body,  Title } from 'native-base';
import { Actions } from 'react-native-router-flux';

import Login from './Login'
import Img from './Image'


export default class Home extends Component {
  
  constructor(props){
    super(props);
    this.state={
      dataitem:[],
      //namedata: []
    }
  }
 
  async componentDidMount() {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        var userdata = JSON.parse(value)
        // console.log(userdata.id)
        // console.log('https://www.tjori.com/api/order/item/owner/'+userdata.id+'/?format=json')
        
        fetch('https://www.tjori.com/api/order/item/owner/'+userdata.id+'/?format=json')
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson.op)
        this.setState({
          dataitem: responseJson
        }); 
        // console.log(this.state.dataitem.op)      
      })

      }       
    } catch (error) {
      console.log(error);
    }

  }


  OrderItem(data){
    // console.log(data.id)
    // console.log(data.slug)
    for (let j = 0; j < data.length; j++) {
      const element = data[j];
      console.log(element)
  
}
  }

  render() {  

    for (let i = 0; i < this.state.dataitem.length; i++) {
      const element = this.state.dataitem[i];
      this.OrderItem(element.op.product)     
    }
    
    return (
             <Container>
                        <Header>
                        <Body style={{alignItems:"center",marginTop:20}}>
                        <Title style={{fontSize:25}}>TJORI</Title>
                        </Body>
                        </Header>
  
            <ScrollView >
           
            {this.state.dataitem.map((p, index) => (
              
                    <View style={{alignItems:"center",marginTop:18}} >
                <Text style={{fontSize:18, textAlign:"center"}}>{p.op.product.sku} </Text>

                <View style={{flex: 1, flexDirection: 'row',height:140}} >               
                <TouchableOpacity style = {{ margin: 12 }}   onPress={()=>Actions.image({'data':p.op.product})}>
                <View style={{width: 100, height: 150, }}>
                <Image               
                  style={{width: 90, height: 110,marginTop:5}}
                  source={{ uri: p.op.product.cdn_small_image }}
                />
                </View>
                </TouchableOpacity>

                <View style={{width: 80, height: 150}} >
                <Text style={{paddingTop:10,fontSize:16}}>Size</Text>
                <Text style={{fontSize:16}}>Quantity</Text>
                <Text style={{fontSize:16}}>Cost</Text>
                <Text style={{fontSize:16}}>Order</Text>
                <Text style={{fontSize:16}}>Date</Text>
                </View>
                <View style={{width: 140, height: 150, }}>
                <Text style={{paddingTop:10,fontSize:16}}>{p.op.size}</Text>
                <Text style={{fontSize:16}}>{p.op.quanity}</Text>
                <Text style={{fontSize:16}}>{p.op.product.cost_price} </Text>
                <Text style={{fontSize:16}}>{p.op.order} </Text>
                <Text style={{fontSize:16}}>{p.created} </Text>
                </View>             
              </View> 
           </View> 

          ))}
            
          </ScrollView> 
       </Container>
    )
  }
}


