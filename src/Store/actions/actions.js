export const SET_TAG = 'SET_TAG';

export const UPDATE_PICTURES = 'UPDATE_PICTURES';


export const setSearchTag = tag => {
  return {
    type: SET_TAG,
    tag
  }
}


export const setPictures = picturesArray => {
  return {
    type: UPDATE_PICTURES,
    picturesArray
  }
}