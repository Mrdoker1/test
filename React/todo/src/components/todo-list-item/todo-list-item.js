import React from "react";
import './todo-list-item.css'

const TodoListItem = ({ label, important = false }) => {

    const style = {
        color: important ? 'tomato' : 'black',
        fontWeight: important ? 'bold' : 'normal'
      };

    return (
    <span className="todo-list-item">
      <span
        className="todo-list-item-label"
        style={style}>
        {label}
      </span>

      <button type="button" className="btn btn-outline-danger btn-sm">
        <span className="material-icons">delete</span>
      </button>

      <button type="button" className="btn btn-outline-success btn-sm">
      <span className="material-icons">star_rate</span>
      </button>
      
    </span>
  );
}

export default TodoListItem;