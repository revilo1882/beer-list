import * as actions from './index';
import { beers } from '../data/fixtures';

describe('actions', () => {
  it('creates an action to set beers', () => {
    const expectedAction = {
      type: actions.SET_BEERS,
      beers
    };

    expect(actions.setBeers(beers)).toEqual(expectedAction);
  });
});
