import React, {Component} from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {

    render() {
        const { 
            label, 
            onDeleted, 
            onToggleImportant, 
            onToggleDone, 
            done, 
            important } = this.props;

        let className = 'todo-list-item d-flex'

        if (done){
            className += ' done';
        }
        if (important) {
            className += ' important'
        }

        return (
            <span className={className}>
                <span
                    className="todo-list-item-label flex-grow-1"
                    onClick={onToggleDone}
                >
                    {label}
                </span>

                <button
                    type="button"
                    className="btn btn-outline-success btn-sm"
                    onClick={onToggleImportant}
                >
                    <i className="fa fa-exclamation" />
                </button>

                <button 
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={onDeleted}
                >
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    };
}


