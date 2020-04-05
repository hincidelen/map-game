import React, {Component} from 'react';
import Map from "./Map";
import TagList from "./Tags/TagList";
import TargetBoxList from "./Tags/TargetBoxList";

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMouseOver: false,
			gameData: require('../../assets/map.json')
		};
		console.log("hello")
	}
	render() {//.mapList[0].baseImage
		console.log(this.props)
		const index = this.props.match.params.index;
		console.log(index)
		const {gameData}= this.state;//style={{position:'absolute'}}
		const imageHeigt = gameData.mapList[index].baseImageHeight;
		const imageSource = gameData.mapList[index].baseImage;
		const imageList = gameData.mapList[index].imageList;
		console.log(imageSource)
		return (

			<div className={"container"}>
				<h4>{gameData.mapList[index].name}</h4>
				<div style={{height:imageHeigt}}  >
					<Map imageList={imageList} height={imageHeigt} source={imageSource}/>
					<TargetBoxList list={gameData.mapList[index].targetBoxList}/>
					<TagList draggableWordList={gameData.mapList[index].targetBoxList}/>
				</div>
			</div>
		);
	}
}

export default Game;
