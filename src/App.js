import React from 'react';
import Basket from './components/Basket/Basket'
import ResultBox from './components/ResultBox/ResultBox'
import Carts from './components/Carts/Carts'
import './App.css'
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <ResultBox />
      <Carts />
      <Basket />
    </div>
  );
}

export default App;
