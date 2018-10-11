import React, { Component } from 'react';

class Volume extends Component {
  sortVolume(beers) {
    beers.sort(function (a, b) {
      return a.volume.value - b.volume.value;
    });
  }

  render(){
    return (
      <div>
        {this.sortVolume(this.props.beers)}
      </div>
    )
  }
}

export default Volume;
