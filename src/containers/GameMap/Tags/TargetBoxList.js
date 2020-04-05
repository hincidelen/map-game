import React, {Component} from "react";
import Drag from "./DraggableTag";
import * as PropTypes from "prop-types";

import Draggable from 'react-draggable';
class TargetBoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 10,
            width: 65
        };
    }
    changeBackground(e) {
        console.log('girdi');
        e.target.style.background = 'red';
    }
    changeBackground2(e) {
        console.log('çıktı');
        e.target.style.background = 'white';
    }
    render() {
        const {list} = this.props;//style={{display: "inline"}}

        return <ul>
            {list.map((item, index) => {
                const {x, y} = item.location;
                const{height, width} = this.state;
                const marginLeft = x + 'px';
                const marginTop = y + 'px';

                return (
                    <li className={'targetBox'+item.id} onDragOver={this.changeBackground} onDragEnter={this.changeBackground} onDragLeave={this.changeBackground2} style={{ height, width, position:'absolute',border: '1px solid #aaaaaa', marginLeft, marginTop}}>
                    </li>
                )
            })}
        </ul>;
    }
}

TargetBoxList.propTypes = {
    list: PropTypes.any
};

export default TargetBoxList;
