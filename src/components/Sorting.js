import React, { Component } from 'react';
import { options } from '../data/options'
import { sortAbv, sortFirstBrewed, sortName, sortVolume } from './functions/SortBy'

class Sorting extends Component {
  asignSorting(beers, value) {
    if (value === options[0].value) {
      return sortAbv(beers)
    }
    else if (value === options[1].value) {
      return sortFirstBrewed(beers)
    }
    else if (value === options[2].value) {
      return sortName(beers)
    }
    else if (value === options[3].value) {
      return sortVolume(beers)
    }
  }

  render(){
    const { beers, value } = this.props;
    this.asignSorting(beers, value);

    return (
      <div>

      </div>
    )
  }
}

export default Sorting;
