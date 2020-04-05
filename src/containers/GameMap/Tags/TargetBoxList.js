import React, {Component} from "react";
import * as PropTypes from "prop-types";

class TargetBoxList extends Component {
    state = {
        height: 10,
        width: 100,
        isOver: false
    };
    /*constructor(props) {
        super(props);
        this.state = {
            height: 10,
            width: 100,
            isOver: false
        };
    }*/
    componentDidMount() {
        const {list} = this.props
    }

    dragEnter(e) {
        //console.log(this.state);
        //e.target.style.background = 'red';
        e.target.style.border = '3px solid rgb(170, 170, 170)';
        //this.boo=true;
        /*if(this.state.isOver!=undefined && !this.state.isOver)
            this.setState({isOver: true})*/
    }
    dragLeave(e) {
        //console.log(this.state);
        e.target.style.border = '1px solid rgb(170, 170, 170)';
        /*if(this.state.isOver)
            this.setState({isOver: false})*/
    }
    render() {
        const {mapIndex, list} = this.props;//style={{display: "inline"}}
        return <ul className={'nopadding'} >
            {list.map((item, index) => {
                const {x, y} = item.location;
                const {source, height, width, rotate} = item.image;
                const marginLeft = x + 'px';
                const marginTop = y + 'px';
                const style = {
                    height: height+'px',
                    width: width+'px',
                    marginLeft,
                    marginTop,
                    //position: 'absolute',
                    border: '1px solid #aaaaaa',
                    backgroundImage: "url(" + source + ")",
                    backgroundPosition: "center",
                    backgroundRepeat: "repeat",
                    backgroundSize: "contain",
                    transform: "rotate(" + rotate + ")"
                };
                return (
                    <li key={mapIndex+''+index} className={'side'}>

                        <div
                            key={mapIndex+''+index}
                            className={'targetBox'}
                            onDragOver={this.dragEnter}
                            onDragCapture={this.dragEnter}
                            onDragEnter={this.dragEnter}
                            onDragLeave={this.dragLeave}
                            style = {style}>

                        </div>
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
