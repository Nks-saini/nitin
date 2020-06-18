import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import About from './About.js'
import Detail from './Routes.js'
import Animation from './Animation3'
import PickerExample from './Picker.js'
import ModalExample  from './Modal.js'
import DraggableView from './Animation4'
import Animation5 from './Animation5'
import Animation6 from './Animation6'
import Infinite from './Loder.js'



const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "about" component = {About} title = "About" />
         <Scene key = "detail" component = {Detail} title = "Detail" />
         <Scene key = "animation3" component = {Animation} title = "Animation3" />
         <Scene key = "picker" component = {PickerExample} title = "Picker" />
         <Scene key = "modal" component = {ModalExample} title = "Modal" />
         <Scene key = "animation4" component = {DraggableView} title = "Animation4" />
         <Scene key = "animation5" component = {Animation5} title = "Animation5" />
         <Scene key = "animation6" component = {Animation6} title = "Animation6" />
         <Scene key = "loader" component = {Infinite} title = "Loader" />


      </Scene>
   </Router>
)
export default Routes