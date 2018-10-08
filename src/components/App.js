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
		return (
			<div>
        <h2>Brewdog Beer List</h2>
				{
					this.props.beers.map(beer => {
						return(
							<div key={beer.id} className='card'>
								<h4>{beer.name}</h4>
							</div>
						)
					})
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { beers: state }
}

export default connect(mapStateToProps, { setBeers })(App);
