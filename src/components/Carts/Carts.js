import React, {useState} from 'react';
import Store from '../../Store/Store'
import './carts.css'


const handleCheck = (val) => {
  console.log('checked',val)
}



const  Carts = () => {

  const [tagVal, setTagVal] = useState(Store.getTag());
  Store.on('tagUpdate', () => setTagVal(Store.getTag()));


  return (
    <div className="carts">
        <button onClick= {handleCheck} > {tagVal} </button>
    </div>
  );
}

export default Carts;
