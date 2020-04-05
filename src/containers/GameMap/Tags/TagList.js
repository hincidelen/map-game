import React, {Component} from "react";
import Drag from "./DraggableTag";
import * as PropTypes from "prop-types";

class TagList extends Component {


    render() {
        const {draggableWordList, mapIndex} = this.props;//style={{display: "inline"}}
        return <ul className={'nopadding'}>
            {draggableWordList.map((draggableItem, index) => {
                const startPosition = {
                    x: (draggableItem.word.startPosition.x),
                    y: draggableItem.word.startPosition.y
                };
                return (
                    <li key={mapIndex+''+index} className={'side'}>
                        <Drag
                            key={mapIndex+''+index}
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
