import React, { Component } from 'react';

class Abv extends Component {
  sortAbv(beers) {
    beers.sort(function (a, b) {
      return a.abv - b.abv;
    });
  }

  render(){
    return (
      <div>
        {this.sortAbv(this.props.beers)}
      </div>
    )
  }
}

export default Abv;
