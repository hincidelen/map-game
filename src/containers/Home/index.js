import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { loadTodos, addItem, deleteItem } from '../../actions/todo-actions';
import Heading from '../../components/Heading'
import ToDo from '../../components/ToDo'

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.onDelete = this.onDelete.bind(this);
		this.onAdd = this.onAdd.bind(this);
	}

	componentDidMount() {
		if (this.props.todos.todoList.length === 0) {
			this.props.loadTodos();
		}
	}

	onDelete(index) {
		// Implement onDelete with redux
		this.props.deleteItem(index);
	}

	onAdd(item) {
		// Implement onAdd with redux
		this.props.addItem(item);
	}

	render() {
		if (this.props.todos.loading) {
			return <h1>Loading</h1>;
		}
		return (
			<div className="home-container">
				<Heading title="ToDo List" />
				<ToDo data={this.props.todos.todoList} onAdd={this.onAdd} onDelete={this.onDelete} />
			</div>
		);
	}
}

const getTodoItems = createSelector(
	state => state.todoReducer,
	(todoReducer) => todoReducer.toJS()
)

const mapStateToProps = (state) => ({
	todos: getTodoItems(state)
})


const mapDispatchToProps = (dispatch) => {
	return {
		loadTodos: (todoList) => {
			dispatch(loadTodos(todoList))
		},
		addItem: (item) => {
			dispatch(addItem(item))
		},
		deleteItem: (index) => {
			dispatch(deleteItem(index))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);