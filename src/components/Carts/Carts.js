import React from 'react';
import './carts.css'

const handleCheck = (val) => {
  console.log('checked',val)
}

const  Carts = () => {
  const value = 'test';
  
  return (
    <div className="carts">
        <button onClick= {() => handleCheck(value)} > get by props from input </button>
        <button onClick= {() => handleCheck(value)} > Dynamic content </button>
    </div>
  );
}

export default Carts;
