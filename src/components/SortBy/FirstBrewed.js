import React, { Component } from 'react';

class FirstBrewed extends Component {
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
        {this.sortFirstBrewed(this.props.beers)}
      </div>
    )
  }
}

export default FirstBrewed;
