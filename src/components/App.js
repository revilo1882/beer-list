import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBeers } from '../actions';

export class App extends Component {
	componentDidMount() {
    if (this.props.beers.length === 0) {
			fetch('https://api.punkapi.com/v2/beers')
				.then(response => response.json())
        .then(json => this.props.setBeers(json));
    }
  }

	render() {
		// console.log(this.props)
		return (
			<div>
        <h1 className='list-header'>Brewdog Beer List</h1>
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
		);
	}
}

function mapStateToProps(state) {
	return { beers: state }
}

export default connect(mapStateToProps, { setBeers })(App);
