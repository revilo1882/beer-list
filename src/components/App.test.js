import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { beers } from '../data/fixtures';

const props = { beers };

describe('App', () => {
  const app = shallow(<App {...props}/>);

  it('renders the title', () => {
    expect(app.find('.list-header').text()).toEqual('Brewdog Beer List');
  });

  it('creates the correct number of divs', () => {
    expect(app.find('.card div').length).toEqual(beers.length);
  });

  it('names the beers correctly', () => {
    app.find('h3').forEach((beerName, index) => {
      expect(beerName.text()).toEqual(beers[index].name);
    });
  });

  it('creates the correct image url', () => {
    app.find('img').forEach((beerImageUrl, index) => {
      expect(beerImageUrl.prop('src')).toEqual(beers[index].image_url);
    });
  });

  it('creates the correct tagline', () => {
    app.find('h4').forEach((beerTagline, index) => {
      expect(beerTagline.text()).toEqual(beers[index].tagline);
    });
  });

  it('creates the correct abv', () => {
    app.find('h2').forEach((beerAbv, index) => {
      expect(beerAbv.text()).toEqual(`${beers[index].abv}%`);
    });
  });
});
