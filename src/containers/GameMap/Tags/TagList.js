import React, {Component} from "react";
import Drag from "./DraggableTag";
import * as PropTypes from "prop-types";

class TagList extends Component {
    /*constructor(props) {
        super(props);
        this.state = {
            isMouseOver: false,
            gameData: require('../../assets/map.json'),
            imageWidth: '900px'
        };
    }*/
    componentDidMount() {
        this.goBack();
    }

    goBack(){
        console.log('döngeri')
        this.setState({});
    }

    render() {
        const {draggableWordList} = this.props;//style={{display: "inline"}}
        return <ul className={'nopadding'}>
            {draggableWordList.map((draggableItem, index) => {
                const startPosition = {
                    x: (draggableItem.word.startPosition.x),
                    y: draggableItem.word.startPosition.y
                };
                console.log(startPosition);
                return (
                    <li className={'side'}>
                        <Drag
                            draggableItem={draggableItem}
                            startPosition={startPosition}
                        />
                    </li>
                )
            })}
        </ul>;
    }
}

TagList.propTypes = {
    draggableWordList: PropTypes.any
};

export default TagList;
