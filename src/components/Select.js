import React, { Component } from 'react';
import List from './List';
import { options } from '../data/options'

class Select extends Component {
  constructor(props){
    super(props);
    this.state = {
      options: options,
      value: options[0].value
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render(){
    const { options, value } = this.state
    return (
      <div>
        <select onChange={this.handleChange} defaultValue={value}>
          {options.map(item => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        <List beers={this.props.beers} />
      </div>
    )
  }
}

export default Select;
