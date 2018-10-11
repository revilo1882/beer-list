import React from 'react';
import { shallow } from 'enzyme';
import Volume from './Volume';
import { beers } from '../../data/fixtures'
import { beers2 } from '../../data/fixtures'

const props = { beers };

describe('sort by volume', () => {

  shallow(<Volume {...props}/>);

  it('sorts the first option', () => {
    expect(props.beers[0]).toEqual(beers2[1]);
  });
  it('sorts the second option', () => {
    expect(props.beers[1]).toEqual(beers2[2]);
  });
  it('sorts the third option', () => {
    expect(props.beers[2]).toEqual(beers2[0]);
  });
});
