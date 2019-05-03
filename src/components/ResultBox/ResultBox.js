import React, { Component } from 'react';
import './resultBox.css'
import Store from '../Store/Store'


export default class ResultBox extends Component {
  constructor(){
    super();
    this.state = {
      pictures: [],
      API_KEY : `6853db01b5e59ad83436052c23de4c9d`
    };
    
  }

  componentWillMount(){

    const tags = this.props.tag;
    const link = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.state.API_KEY}&tags=${tags}&per_page=5&format=json&nojsoncallback=1`
    
    fetch(link)
    .then( response => response.json())
    .then( myJson => {
      const picArray = myJson.photos.photo.map((pic, id) => {
        const srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
        return(<img alt={tags} src={srcPath} key={id} draggable='true'></img>)
      })
      this.setState({pictures: picArray});
    })
  }


  render (){
    return (
      <div className="resultBox" >
        {this.state.pictures}
      </div>
    );
  }
}
