import rootReducer from './index';
import * as actions from '../actions';
import { beers } from '../data/fixtures';

describe('root reducer', () => {
  it('sets categories', () => {
    expect(rootReducer({}, { type: actions.SET_BEERS, beers }))
    .toEqual(beers);
  });
});
