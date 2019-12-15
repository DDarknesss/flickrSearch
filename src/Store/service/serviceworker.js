const getApi =  (tagValue) => {
  const API_KEY =  `6853db01b5e59ad83436052c23de4c9d`;
  return `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${tagValue}&per_page=5&format=json&nojsoncallback=1`
}


export const onChange = (tagValue) => {
  const api = getApi(tagValue);
  fetch(api)
    .then(response => response.json())
    .then(myJson => {
      const picArray = myJson.photos.photo.map((pic, id) => {
        const srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
        return srcPath;
      })
      return picArray;
    }).catch(err => console.log('You have an err:', err))
}