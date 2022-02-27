import React, { Component } from "react";
import TodoListItem from '../todo-list-item';
import './todo-list.scss'

export default class TodoList extends Component {

    render() {

      const { todoItems, onDelete, onEdit, onDone } = this.props;

      const arr = todoItems.map(element => {

        return (<TodoListItem
                  key = {element.id}
                  saveItem = {onEdit}
                  onDelete = {onDelete}
                  onDone = {onDone}
                  todoValue = {element}/>)
      });

      return (
          <div className="todo-list">
            {arr}
          </div>
      );
  }
}