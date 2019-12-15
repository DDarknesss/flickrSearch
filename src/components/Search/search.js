import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './search.css'
import { setSearchTag } from '../../Store/actions/actions'
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const tagValue = useSelector(store => store.tag);

  const hangleSearch = () => {
    setSearchTag(tagValue);
  }

  const handleChange = e => {
    const searchValue = e.target.value;
    setSearchTag(searchValue);
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search.."
        name="search"
        onChange={handleChange}
      />
      <button type="button" onClick={hangleSearch}>
        <i className="fa fa-search" />
      </button>
    </div>
  );
}

export default Search;