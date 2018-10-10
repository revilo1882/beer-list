import { SET_BEERS, SORT_BEERS } from '../actions';

function beers(state = [], action) {
  switch(action.type) {
    case SET_BEERS:
      return action.beers;
    default:
      return state;
  }
}

function sorting(state = {}, action) {
  switch(action.type) {
    case SORT_BEERS:
    return action.sorting;
    default:
    return state;
  }
}

export default beers;
