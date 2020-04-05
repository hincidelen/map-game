import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Game from './Game'

class GameMap extends Component {

	constructor(props) {
		super(props);
		this.state = {
			listSize: 0,
			gameData: require('../../assets/map.json')
		};
	}
	componentDidMount() {
		//this.setState({gameData:require('../../assets/map.json')})
		const {mapList} = this.state.gameData;
		this.setState({listSize:mapList.length})
		console.log(mapList.length)
	}

	render() {
		const {mapList} = this.state.gameData;
		return (
			<div className="App">
				<BrowserRouter>
					<div>
						<ul>
							{mapList.map((map, index) => {
								const link = '/drag/'+(index);
								return(
									<li>
										<Link to={link}> {map.name}</Link>
									</li>
								)

							})}
						</ul>
					</div>
					<Route path='/drag/:index' component={Game} />
				</BrowserRouter>
			</div>
		);
	}
}

export default GameMap;
