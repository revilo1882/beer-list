import React, { Component } from 'react';

class List extends Component {
  render() {

    return (
      <div>
        <div className='board'>
          {
            this.props.beers.map((beer, index) => {
              return(
                <div key={beer.id} className='card'>
                  <img src={beer.image_url} alt={beer.name} className='card-pic'/>
                  <h4 className='card-tagline'>
                    {beer.tagline}
                  </h4>
                  <div className='card-shape'>
                    <h2 className='card-shape-caption'>{beer.abv}%</h2></div>
                  <h3 className='card-name'>{beer.name}</h3>
                </div>
                )
              })
            }
        </div>
      </div>
    )
  }
}

export default List;
