import React, { Component } from 'react';
import { options } from '../data/options'

class Sort extends Component {
  sortBeers(value, beers) {
    if (value === options[0].value) {
      this.sortAbv(beers)
    }
    else if (value === options[1].value) {
      this.sortFirstBrewed(beers)
    }
    else if (value === options[2].value) {
      this.sortName(beers)
    }
    else if (value === options[3].value) {
      this.sortVolume(beers)
    }
  }

  sortName(beers) {
    return beers.sort(function(a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
  }

  sortAbv(beers) {
    beers.sort(function (a, b) {
      return a.abv - b.abv;
    });
  }

  sortVolume(beers) {
    beers.sort(function (a, b) {
      return a.volume.value - b.volume.value;
    });
  }

  sortFirstBrewed(beers) {
    beers.sort(function (a, b) {
      a = a.first_brewed.split('/');
      b = b.first_brewed.split('/');
      return a[1] - b[1] || a[0] - b[0];
    });
  }

  render(){
    return (
      <div>
        {this.sortBeers(this.props.value, this.props.beers)}
      </div>
    )
  }
}

export default Sort;
