import React from 'react';
import Draggable from 'react-draggable';
import { connect } from 'react-redux';

class DraggableTag extends React.Component {

	state = {
		activeDrags: 0,
		deltaPosition: {
			x: 0, y: 0
		},
		controlledPosition: {
			x: -400, y: 200
		}
	};

	handleDrag = (e, ui) => {
		const {x, y} = this.state.deltaPosition;
		this.setState({
			deltaPosition: {
				x: x + ui.deltaX,
				y: y + ui.deltaY,
			}
		});
	};

	onStart = () => {
		this.setState({activeDrags: ++this.state.activeDrags});
	};

	onStop = () => {
		this.setState({activeDrags: --this.state.activeDrags});
	};

	// For controlled component
	adjustXPos = (e) => {
		e.preventDefault();
		e.stopPropagation();
		const {x, y} = this.state.controlledPosition;
		this.setState({controlledPosition: {x: x - 10, y}});
	};

	adjustYPos = (e) => {
		e.preventDefault();
		e.stopPropagation();
		const {controlledPosition} = this.state;
		const {x, y} = controlledPosition;
		this.setState({controlledPosition: {x, y: y - 10}});
	};

	onControlledDrag = (e, position) => {
		const {x, y} = position;
		this.setState({controlledPosition: {x, y}});
	};

	onControlledDragStop = (e, position) => {
		this.onControlledDrag(e, position);
		this.onStop();
	};
	render() {
		const dragHandlers = {onStart: this.onStart, onStop: this.onStop, onDrag:this.handleDrag};
		const {deltaPosition, controlledPosition} = this.state;// x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}
		return (
			<div>
				<Draggable
					position={{x: 0, y: 0}}
					{...dragHandlers}
				>
					<div className="box">
						<div>{this.props.name}</div>
					</div>
				</Draggable>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	x: ""//getTodoItems(state)
})

export default connect(
	mapStateToProps
)(DraggableTag);
/*
				<Draggable
					defaultClassName="ReactTags__tag"
                    axis="both" //x
                    handle=".handle"
                    defaultPosition={{x: 0, y: 0}}
                    position={null}
                    grid={[125, 125]}
                    scale={1}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.onStop}>
                    <div>
                        <div className="handle">Drag from here</div>
                        <div>This readme is really dragging on...</div>
                    </div>
                </Draggable>*/
