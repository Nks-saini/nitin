import React from 'react'
import { TouchableOpacity, Text,ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {
   
   return (
      <ScrollView>
                  <TouchableOpacity style = {{ margin: 12,alignItems:"center" }}  onPress = {() => Actions.about()} >
                     <Text>Go to ---- Animation 1</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style = {{ margin: 12 ,alignItems:"center"}} onPress = {() => Actions.detail()}>
                  <Text>Go to ---- Animation 2</Text>
                  </TouchableOpacity>

                  {/* <TouchableOpacity style = {{ margin: 12, alignItems:"center" }} onPress = {() => Actions.animation3()}>
                  <Text>Go to ---- Animation 3</Text>
                  </TouchableOpacity> */}

                  <TouchableOpacity style = {{ margin: 12, alignItems:"center" }} onPress = {() => Actions.picker()}>
                  <Text>Go to ---- Picker</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style = {{ margin: 12, alignItems:"center" }} onPress = {() => Actions.modal()}>
                  <Text>Go to ---- Modal</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style = {{ margin: 12, alignItems:"center" }} onPress = {() => Actions.animation4()}>
                  <Text>Go to ---- animation 4</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style = {{ margin: 12, alignItems:"center" }} onPress = {() => Actions.animation5()}>
                  <Text>Go to ---- animation 5</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style = {{ margin: 12, alignItems:"center" }} onPress = {() => Actions.animation6()}>
                  <Text>Go to ---- animation 6</Text>
                  </TouchableOpacity>

                  {/* <TouchableOpacity style = {{ margin: 12, alignItems:"center" }} onPress = {() => Actions.try()}>
                  <Text>Go to ---- Try</Text>
                  </TouchableOpacity> */}

                  {/* <TouchableOpacity style = {{ margin: 12, alignItems:"center" }} onPress = {() => Actions.loader()}>
                  <Text>Go to ---- animation Loder</Text>
                  </TouchableOpacity> */}

                  {/* <TouchableOpacity style = {{ margin: 12, alignItems:"center" }} onPress = {() => Actions.ripple()}>
                  <Text>Go to ---- Ripple</Text>
                  </TouchableOpacity> */}
                  

                 
      </ScrollView>
   )
}
export default Home