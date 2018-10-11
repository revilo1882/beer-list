import React, { Component } from 'react';
import { options } from '../data/options'
import Abv from './SortBy/Abv'
import FirstBrewed from './SortBy/FirstBrewed'
import Name from './SortBy/Name'
import Volume from './SortBy/Volume'

class Sorting extends Component {
  asignSorting(items, value) {
    if (value === options[0].value) {
      return <Abv beers={items} />
    }
    else if (value === options[1].value) {
      return <FirstBrewed beers={items} />
    }
    else if (value === options[2].value) {
      return <Name beers={items} />
    }
    else if (value === options[3].value) {
      return <Volume beers={items} />
    }
  }

  render(){
    const { beers, value } = this.props;

    return (
      <div>
        {this.asignSorting(beers, value)}
      </div>
    )
  }
}

export default Sorting;
