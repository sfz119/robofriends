import React, { Component } from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import {robots} from '../robots';
import Scroll from '../component/scroll';
import ErrorBoundry from '../component/errorboundry.js';
import './App.css';

class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount (){ 
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: robots}));
	}

	onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value});
	}
	render(){
		const {robots, searchfield } = this.state;
		const filterRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(
				searchfield.toLowerCase()
			);
		})

	if(!robots.length){
		return <h1>loading</h1>;
	}else{
		return(
			<div className="tc">
			<h1 className="f1">RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<ErrorBoundry>
					<CardList robots={ filterRobots }/>
				</ErrorBoundry>
			</Scroll>
			</div>
			);
		}

	}
}
export default App;