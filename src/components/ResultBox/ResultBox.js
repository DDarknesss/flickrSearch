import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Carts from '../Carts/Carts'
import Store from '../../Store/Store'
import Basket from '../Basket/Basket'
import './resultBox.css'
import '../Basket/basket.css'

const ResultBox = props => {
  const apiKey = useSelector(store => store.API_KEY);
  const tagValue = useSelector(store => store.tag);
  const [state, useIngState] = useState({
    pictures: [],
  });

  const api = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tagValue}&per_page=5&format=json&nojsoncallback=1`
  Store.on('tagUpdate', () => onChange());



  const onChange = () => {
    fetch(api)
      .then(response => response.json())
      .then(myJson => {
        const picArray = myJson.photos.photo.map((pic, id) => {
          const srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
          return (
            <img alt={state.tag}
              src={srcPath}
              key={id}
              onDragStart={dragStart} draggable="true"
              id={id}
            />
          )
        })
        PictureChange(picArray)
      }).catch(err => console.log('You have an err:', err))
  }

  const PictureChange = (picArray) => useIngState({ pictures: picArray })

  const dragStart = (event) => {
    event.dataTransfer.setData("image", event.target.id);
  }

  const allowDrop = (event) => {
    event.preventDefault();
  }

  const drop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("image");
    event.target.appendChild(document.getElementById(data));

  }
  return (<div className='maintBox'>

    <div className="resultBox" >
      <div>
        {state.pictures}
      </div>
    </div>

    <Carts />

    <div id="droptarget"
      className="basket"
      onDrop={drop}
      onDragOver={allowDrop}>
      <Basket />
    </div>

  </div>
  );
}


export default ResultBox;