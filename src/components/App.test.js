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
    expect(app.find('.card').length).toEqual(beers.length);
  });

  it('names the beers correctly', () => {
    app.find('.card-name').forEach((beerName, index) => {
      expect(beerName.text()).toEqual(beers[index].name);
    });
  });

  it('create the correct image url', () => {
    app.find('.card-pic-img').forEach((beerImageUrl, index) => {
      expect(beerImageUrl.prop('src')).toEqual(beers[index].image_url);
    });
  });
});
