import React from 'react';
import { shallow } from 'enzyme';
import Abv from './Abv';
import { beers } from '../../data/fixtures'
import { beers2 } from '../../data/fixtures'

const props = { beers };

describe('sorts by abv', () => {

	shallow(<Abv {...props}/>);

	it('sorts the first option', () => {
		expect(props.beers[0]).toEqual(beers2[1]);
	});
  it('sorts the second option', () => {
		expect(props.beers[1]).toEqual(beers2[0]);
	});
  it('sorts the third option', () => {
    expect(props.beers[2]).toEqual(beers2[2]);
  });
});
