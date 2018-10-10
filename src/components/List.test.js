import React from 'react';
import { shallow } from 'enzyme';
import List from './List';
import { beers } from '../data/fixtures';

const props = { beers };

describe('List', () => {
  const list = shallow(<List {...props}/>);

  it('creates the correct number of divs', () => {
    expect(list.find('.card div').length).toEqual(beers.length);
  });

  it('names the beers correctly', () => {
    list.find('h3').forEach((beerName, index) => {
      expect(beerName.text()).toEqual(beers[index].name);
    });
  });

  it('creates the correct image url', () => {
    list.find('img').forEach((beerImageUrl, index) => {
      expect(beerImageUrl.prop('src')).toEqual(beers[index].image_url);
    });
  });

  it('creates the correct tagline', () => {
    list.find('h4').forEach((beerTagline, index) => {
      expect(beerTagline.text()).toEqual(beers[index].tagline);
    });
  });

  it('creates the correct abv', () => {
    list.find('h2').forEach((beerAbv, index) => {
      expect(beerAbv.text()).toEqual(`${beers[index].abv}%`);
    });
  });
});
