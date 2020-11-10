import React from "react";

import TodoListItem from "../todo-list-item";
import './todo-list.css'


const TodoList = ({ todos, onDeleted, 
                    onToggleImportant, onToggleDone, search }) => {

    const todoFilter = todos.filter((el)=>el.label
                            .toLowerCase().includes(search.toLowerCase()));

    const elements = todoFilter.map((item) => {
        const {id, ...itemProps} = item
        return (
            <li key={id} className="list-group-item">
                <TodoListItem 
                    {...itemProps}
                    onDeleted={()=>onDeleted(id)}
                    onToggleImportant={()=>onToggleImportant(id)}
                    onToggleDone={()=>onToggleDone(id)}  
                />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;
