import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBeers } from '../actions';
import Select from './Select'

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
        <h1 className='list-header'>Brewdog Beer List</h1>
				<Select beers={this.props.beers} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { beers: state }
}

export default connect(mapStateToProps, { setBeers })(App);
