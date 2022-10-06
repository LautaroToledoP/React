import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer';

function App() {
  return (

    <div className="App">
        <Navbar />
      <ItemListContainer greeting={'Bienvenido/a'}/>
      
    </div>

  );
}

export default App;
