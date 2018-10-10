import React from 'react';
import { shallow } from 'enzyme';
import Select from './Select';
import { options } from '../data/options'

describe('Select', () => {
  const select = shallow(<Select />);

  describe('initial state', () => {
		it('sets the options', () => {
			expect(select.state().options).toEqual(options);
		});

		it('sets the initial value', () => {
			expect(select.state().value).toEqual(options[0].value);
		});
	});

  describe('initial rendering', () => {
    it('creates the options values', () => {
      select.find('option').forEach((item, index) => {
        expect(item.prop('value')).toEqual(options[index].value);
      });
    });

    it('creates the options names', () => {
      select.find('option').forEach((item, index) => {
        expect(item.text()).toEqual(options[index].name);
      });
    });
  });

  describe('changes the state', () => {
    it('changes the state', () => {
      select.find('select').simulate('change', {target: { value: options[1].value}});
      expect(select.state().value).toEqual(options[1].value);
    });
  })
});
