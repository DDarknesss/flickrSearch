import React from 'react';
import Search from '../Search/Search'
import './header.css'

const  Header = () => {
  return (
    <div className="header">
        <span> Serch flickr here: </span>
        <Search />
    </div>
  );
}

export default Header;
