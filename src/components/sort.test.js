import React from 'react';
import { shallow } from 'enzyme';
import Sort from './Sort';
import { options } from '../data/options'
import { beers } from '../data/fixtures'
import { beers2 } from '../data/fixtures'

const props = { beers, value: options[0].value };
const props2 = { beers, value: options[1].value };
const props3 = { beers, value: options[2].value };
const props4 = { beers, value: options[3].value };

describe('Select', () => {
  describe('sorts by abv', () => {
    beforeEach(() => {
			shallow(<Sort {...props}/>);
		});
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

  describe('sort by first brewed', () => {
    beforeEach(() => {
			shallow(<Sort {...props2}/>);
		});
    it('sorts the first option', () => {
			expect(props2.beers[0]).toEqual(beers2[2]);
		});
    it('sorts the second option', () => {
			expect(props2.beers[1]).toEqual(beers2[1]);
		});
    it('sorts the third option', () => {
      expect(props2.beers[2]).toEqual(beers2[0]);
    });
	});

  describe('sort by name', () => {
    beforeEach(() => {
			shallow(<Sort {...props3}/>);
		});
    it('sorts the first option', () => {
			expect(props3.beers[0]).toEqual(beers2[0]);
		});
    it('sorts the second option', () => {
			expect(props3.beers[1]).toEqual(beers2[2]);
		});
    it('sorts the third option', () => {
      expect(props3.beers[2]).toEqual(beers2[1]);
    });
	});

  describe('sort by volume', () => {
    beforeEach(() => {
      shallow(<Sort {...props4}/>);
    });
    it('sorts the first option', () => {
      expect(props4.beers[0]).toEqual(beers2[1]);
    });
    it('sorts the second option', () => {
      expect(props4.beers[1]).toEqual(beers2[2]);
    });
    it('sorts the third option', () => {
      expect(props4.beers[2]).toEqual(beers2[0]);
    });
  });
});
