import React, { useState } from "react";
import './App.css';
import {Input} from './components/Input';



function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <h1>Musings...</h1>
      <Input/>
    </div>
  );
}

export default App;
