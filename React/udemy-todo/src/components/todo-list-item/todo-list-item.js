import React, { Component } from "react";
import './todo-list-item.css'


export default class TodoListItem extends Component {

  render() {

    const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }
    
    if (important) {
      classNames += ' important'
    }

    return (
    <span className={classNames}>
      <span
        className="todo-list-item-label"
        onClick={onToggleDone}>
        {label}
      </span>

      <button type="button" className="btn btn-outline-danger btn-sm">
        <span 
          className="material-icons"
          onClick={onDeleted}>delete</span>
      </button>

      <button type="button" className="btn btn-outline-success btn-sm">
      <span 
        className="material-icons"
        onClick={onToggleImportant}>star_rate</span>
      </button>
      
    </span>
    ); 
  }
}