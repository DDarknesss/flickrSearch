import React, { useState } from 'react';
import Basket from './components/Basket/Basket'
import ResultBox from './components/ResultBox/ResultBox'
import Carts from './components/Carts/Carts'
import './App.css'
import Header from './components/Header/Header';
import Store from './components/Store/Store'

function App() {

  const [tag, setTag] = useState('dog')
  
  console.log(tag);
  
  return (
    <div className="App">
      <Header/>
      <ResultBox tag={tag} />
      <Carts />
      <Basket />
    </div>
  );
}

export default App;
