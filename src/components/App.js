import React, { Component } from 'react';
import Select from './Select'

export class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			beers: []
		}
	}

	componentDidMount() {
		fetch('https://api.punkapi.com/v2/beers')
			.then(response => response.json())
      .then(beers => this.setState({ beers }));
  }

	render() {
		return (
			<div>
        <h1 className='list-header'>Brewdog Beer List</h1>
				<Select beers={this.state.beers} />
			</div>
		);
	}
}

export default App;
