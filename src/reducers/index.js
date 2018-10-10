import { SET_BEERS } from '../actions';

function beers(state = [], action) {
  switch(action.type) {
    case SET_BEERS:
      return action.beers;
    default:
      return state;
  }
}

export default beers;
