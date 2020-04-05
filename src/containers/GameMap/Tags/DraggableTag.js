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
			x: this.props.startPosition.x, y: this.props.startPosition.y
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

	goBack = () => {
		this.setState({
			controlledPosition: {
			x: this.props.startPosition.x,
			y: this.props.startPosition.y
			}
		});
	};

	onControlledDragStop = (e, position) => {
		console.log(e);
		console.log(position);
		console.log(this.checkPosition(position));

		if(!this.checkPosition(position)){
			this.goBack();
		}
		/*
		this.onControlledDrag(e, position);
		this.onStop();*/
	};
	checkPosition=(position)=>{
		const boxLeft = +this.props.draggableItem.location.x;
		const boxRight= boxLeft + +this.props.draggableItem.image.width;
		const boxTop = +this.props.draggableItem.location.y;
		const boxBottom= boxTop + +this.props.draggableItem.image.height;

		console.log(
			boxLeft + ' ' +
			position.x+ ' ' +
			boxRight + ' ' +
			boxTop + ' ' +
			position.y + ' ' +
			boxBottom
		)

		return this.isInOrder(
			boxLeft,
			position.x,
			boxRight
		) && this.isInOrder(
			boxTop,
			position.y,
			boxBottom
		);
	};
	isInOrder = (x,y,z) => {
		console.log(x + ' '+ y + ' ' + z)
		return (x<y && y<z);
	}
	render() {
		const dragHandlers = {onStart: this.onStart, onStop: this.onStop, onDrag:this.handleDrag};
		const {deltaPosition, controlledPosition} = this.state;// x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}
		return (
			<div>
				<Draggable
					//position={{x: 0, y: 0}}
					position={controlledPosition}
					{...dragHandlers}
					onDrag={this.onControlledDrag}
					onStop={this.onControlledDragStop}
				>
					<div className="box">
						<div>{this.props.draggableItem.word.name}</div>
						<p>
							<a href="#" onClick={this.adjustXPos}>Adjust x ({controlledPosition.x})</a>
						</p>
						<p>
							<a href="#" onClick={this.adjustYPos}>Adjust y ({controlledPosition.y})</a>
						</p>
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
