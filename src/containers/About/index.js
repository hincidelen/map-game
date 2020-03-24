import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

class About extends React.Component {
    render() {
		return <h1>{`You have ${this.props.todos.todoList.length} todos in total`}</h1>;
	}
}

const getTodoItems = createSelector(
	state => state.todoReducer,
	(todoReducer) => todoReducer.toJS()
)

const mapStateToProps = (state) => ({
	todos: getTodoItems(state)
})

export default connect(
	mapStateToProps
)(About);