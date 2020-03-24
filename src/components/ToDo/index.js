import React from 'react';
import ToDoItem from './ToDoItem'
import Form from '../Form'

class ToDo extends React.Component {
    render() {
        const { data, onAdd, onDelete } = this.props;
        return (
            <div className="todo-container">
                <Form onSubmit={onAdd} />
                <ToDoItem list={data} onDelete={onDelete} />
            </div>
        )
    }
}

export default ToDo;