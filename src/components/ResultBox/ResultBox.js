import React, { Component } from 'react';
import Carts from '../Carts/Carts'
import Store from '../Store/Store'
import Basket from '../Basket/Basket'
import './resultBox.css'
import '../Basket/basket.css'


export default class ResultBox extends Component {
  constructor(){
    super();
    this.state = {
      pictures: [ ],
      tag: Store.getTag()
    };
    
  }


  onChange () {
    const API_KEY = `6853db01b5e59ad83436052c23de4c9d`;

    const link = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${this.state.tag}&per_page=5&format=json&nojsoncallback=1`
    
    fetch(link)
      .then( response => response.json())
      .then( myJson => {
        const picArray = myJson.photos.photo.map((pic, id) => {
          const srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
          return(
            <img alt={this.state.tag} 
              src={srcPath} 
              key={id} 
              onDragStart={this.dragStart} draggable="true"
              id="dragtarget"
            />
          )
        })
        this.setState({ pictures: picArray });
     })
  }
  
  componentDidMount(){
    this.onChange()
  }


  // componentDidUpdate() {
  //   console.log(' 1')
  //   this.onChange()
  // }

  dragStart(event) {
    event.dataTransfer.setData("image", event.target.id);
  }
  
  allowDrop(event) {
    event.preventDefault();
  }
  
  drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("image");
    event.target.appendChild(document.getElementById(data));
  
  }

  render (){
    return (  <div className='maintBox'>
      
      <div className="resultBox" >
        <div>
            {this.state.pictures}
        </div>
      </div>
      
      <Carts />
      
      <div id="droptarget"
        className="basket" 
        onDrop={this.drop} 
        onDragOver={this.allowDrop}>
       <Basket />
      </div>

   </div>
    );
  }
}
