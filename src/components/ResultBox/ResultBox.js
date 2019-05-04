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
      tag: Store.getTag(),
      API_KEY: `6853db01b5e59ad83436052c23de4c9d`,
      };
    this.link = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.state.API_KEY}&tags=${this.state.tag}&per_page=5&format=json&nojsoncallback=1`
    Store.on('tagUpdate', () => this.onChange());
  }


  onChange () {
    fetch(this.link)
      .then( response => response.json())
      .then( myJson => {
        const picArray = myJson.photos.photo.map((pic, id) => {
          const srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
          return(
            <img alt={this.state.tag} 
              src={srcPath} 
              key={id} 
              onDragStart={this.dragStart} draggable="true"
              id={id} 
            />
          )
        })
        this.setState({ pictures: picArray });
     }).catch(err=> console.log(err))
  }
  
  componentDidMount(){
   // this.onChange();  bug.Loop
  }

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
