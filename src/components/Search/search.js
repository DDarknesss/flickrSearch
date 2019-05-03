import React, {useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './search.css'
import Store from '../Store/Store'

const  Search = () => {

  const [tag, setTag] = useState(Store.getTag());

  const hangleSearch = () => {
    Store.setTag(tag);
  }

  const handleChange = e => {
    const searchValue = e.target.value;
    setTag(searchValue);
  }

  
  return (
    <div className="search">
        <input  type="search"
          placeholder="Search.." 
          name="search" 
          onChange={handleChange}
        />
        <button onClick= {hangleSearch}>
          <i className="fa fa-search"/>
        </button>
    </div>
  );
}

export default Search;