import React, { Component } from 'react';
import { Text, View ,Button} from 'react-native';
import Async from './Detail';

export default class Test extends Component {
  arr=[]
  id=0

  state={
    text :'',
    item :[
      {id:1, data:"loading"}
    ]
  };


storedata = async =>{
  this.arr.push({id:this.id, data:this.state.text}) // push the data new array
  this.id++;
  await AsyncStorage.setItem('mylist',JSON.stringify (this.arr))
  this.setState({
      item:JSON.parse( await AsyncStorage.getItem('mylist'))
  })
  console.log(this.state.item)
  console.log(typeof item)
}



  render() { 
    if(this.state.item.length > 0){
      renderList =this.state.item.map(item => {
      return<Test key={item.id}>{item.data}</Test>
      })
    }
      else{
        renderList = <Text> no values </Text>
      }
    
    return (
      <View>
        <Text>Todo List </Text>
       

        <Input type="text"
        title="add todo"
        value={this.state.text}
        onChangeText={text => this.setState({text})}
        />
        <Button onPress={this.storedata}>click</Button>

        <Text>{renderList}</Text>
      </View>
    );
  }
}






export default class Detail extends Component {


  state={
    item :[]
  };

    componentDidMount() {     
        fetch('https://api.tjori.com/api/v3/?format=json')
          .then((response) => response.json())
          .then((responseJson) => {

            this.setState({                    
              item:responseJson.data         
            })     
          
            this.store1()   

     })
 }

 store1 = () => {
   
  var data = this.state.item;
  var myloop = [];
  for (let index = 0; index < data.length; index++){ 
     
    if (data[index].type === 'collection') 
    {
      myloop.push(data[index].name)

     //console.log(data[index].name);  
  
     
    }
 } 
 console.log(myloop)
 
 }
 