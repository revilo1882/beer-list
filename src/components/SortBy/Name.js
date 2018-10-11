import React, { Component } from 'react';

class Name extends Component {
  sortName(beers) {

    return beers.sort(function (a, b) {
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

  render(){
    return (
      <div>
        {this.sortName(this.props.beers)}
      </div>
    )
  }
}

export default Name;
