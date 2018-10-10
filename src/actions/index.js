export const SET_BEERS = 'SET_BEERS';
export const SORT_BEERS = 'SORT_BEERS';

export function setBeers(beers) {
  return {
    type: SET_BEERS,
    beers
  }
}

export function sortBeers(beers) {
  return {
    type: SORT_BEERS,
    beers
  }
}
