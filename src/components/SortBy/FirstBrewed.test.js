import React from 'react';
import { shallow } from 'enzyme';
import FirstBrewed from './FirstBrewed';
import { beers } from '../../data/fixtures'
import { beers2 } from '../../data/fixtures'

const props = { beers };

describe('sort by first brewed', () => {

	shallow(<FirstBrewed {...props}/>);

  it('sorts the first option', () => {
		expect(props.beers[0]).toEqual(beers2[2]);
	});
  it('sorts the second option', () => {
		expect(props.beers[1]).toEqual(beers2[1]);
	});
  it('sorts the third option', () => {
    expect(props.beers[2]).toEqual(beers2[0]);
  });
});
