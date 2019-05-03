import React from 'react';
import Search from '../Search/Search'
import './header.css'

const  Header = () => {
  return (
    <div className="header">
        <p> Serch flickr here: </p>
        <Search />
    </div>
  );
}

export default Header;
