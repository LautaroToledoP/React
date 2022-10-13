import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';

function App() {


  const handleOnAdd = () => {
    console.log("se agrego al carrito")
  }
  
  
  
  return (

    <div className="App">
        <Navbar />
      <ItemListContainer />
      <Counter onAdd={handleOnAdd}/>
      
    </div>

  );
}

export default App;
