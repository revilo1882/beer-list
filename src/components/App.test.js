import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { beers } from '../data/fixtures';

const props = { beers };

describe('App', () => {
  const app = shallow(<App {...props}/>);

  it('renders the title', () => {
    expect(app.find('h2').text()).toEqual('Brewdog Beer List');
  });

  it('creates the correct number of divs', () => {
    expect(app.find('.card').length).toEqual(beers.length);
  });

  it('names the beers correctly', () => {
    app.find('h4').forEach((beerName, index) => {
      expect(beerName.text()).toEqual(beers[index].name);
    });
  });
});
