import {
  SET_TAG,
  UPDATE_PICTURES
} from '../actions/actions'

const initialState = {
  tag: '',
  pictures: [],
}



const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PICTURES:
      return {
        ...state,
        pictures: action.payload
      };
    case SET_TAG:
      return {
        ...state,
        tag: action.payload
      };
    default:
      return state
  }
}

export default rootReducer;