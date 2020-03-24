import React from 'react';

class ToDoItem extends React.Component {
    render() {
        const { list, onDelete } = this.props;

        return (
            <ul className="todo-list">
                {list.map((item, index) => {
                    return (
                        <li key={`todo-item-${index + 1}`}>
                            <div className="item-id">{item.id}</div>
                            <div className="item-text">{item.text}</div>
                            <div className="item-date">{item.createDate}</div>
                            <button className="btn-icon" onClick={() => onDelete(index)}>X</button>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default ToDoItem;