import React from 'react';
import './search.css'

const hangleSearch = () => {
  console.log("Handeled")
}

const  Search = () => {
  
  return (
    <div className="search">
        <input type="searh"/>
        <button onClick= {hangleSearch}/>
    </div>
  );
}

export default Search;
