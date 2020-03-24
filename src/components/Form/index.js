import React from 'react';
import './style.css';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        const { text } = this.state;
        const createDate = new Date().toString();

        const item = { text, createDate };
        this.props.onSubmit(item);
    }
    render() {
        return (
            <div className="form-container">
                <input value={this.state.item} onChange={e => this.setState({ text: e.target.value })} placeholder="Add ToDo Item" />
                <button className="add-button" onClick={this.onClick}>Add</button>
            </div>
        );
    }
}