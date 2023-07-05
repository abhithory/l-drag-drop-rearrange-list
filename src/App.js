import logo from './logo.svg';
import './App.css';
import { Reorder, useDragControls } from "framer-motion"

import {useState} from 'react'
import FramerPreset from './component/FramerPreset';
import NewTry from './component/NewTry';
import NormalList from './component/NormalList';

function App() {

  const initialItems = [" Tomato", "Cucumber", "Cheese", " Lettuce"];


  const [items, setItems] = useState(initialItems);
  const dragControls = useDragControls();


  return (
    <div className="App">
      {/* <FramerPreset /> */}
      <NewTry />

      {/* <NormalList />   */}
   </div>
  );
}





export default App;
