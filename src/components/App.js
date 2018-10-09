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
        <h2 className='list-header'>Brewdog Beer List</h2>
				<div className='board'>
					{
						this.props.beers.map((beer, index) => {
							return(
								<div key={beer.id} className='card'>
									<div className='card-pic'>
										<img src={beer.image_url} alt={beer.name} className='card-pic-img'/>
									</div>
									<h4 className='card-name'>{beer.name}</h4>
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
