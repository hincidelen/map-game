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
    render() {
        const {draggableWordList} = this.props;//style={{display: "inline"}}
        return <ul >
            {draggableWordList.map((item, index) => {
                return (
                    <li>
                        <Drag
                        name={item.name}
                        targetBoxId={item.targetBoxId}
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
