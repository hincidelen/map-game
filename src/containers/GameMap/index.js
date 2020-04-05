import React, {Component} from 'react';
import Map from "./Map";
import TagList from "./Tags/TagList";
import TargetBoxList from "./Tags/TargetBoxList";

class GameMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMouseOver: false,
			gameData: require('../../assets/map.json'),
			imageHeigt: '400px'
		};
	}
	render() {//.mapList[0].baseImage
		let {gameData, imageHeigt}= this.state;//style={{position:'absolute'}}
		return (
			<div className={"container"}>
				<h4>Coğrafya Quizi</h4>
				<p>Hangi şehirleri ziyaret ettin?</p>
				<div style={{height:imageHeigt}}  >
					<Map height={imageHeigt} source={gameData.mapList[0].baseImage}/>
					<TargetBoxList list={gameData.mapList[0].targetBoxList}/>
				</div>
				<TagList draggableWordList={gameData.mapList[0].draggableWordList}/>
			</div>
		);
	}
}

export default GameMap;
