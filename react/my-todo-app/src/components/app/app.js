import React, { Component } from 'react';
import AppHeader from '../app-header';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import './app.scss';

export default class App extends Component {

  todoID = 100;

  state = {
    todoData : [
      this.createTodoItem(`1)Feed a cat\n2)Feed all fish`),
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App')
    ]
  }

  createTodoItem(text) {
    return {
      text,
      done: false,
      id: this.todoID++
    }
  }

  doneItem = (item, done) => {

    let todoItem
    let todoIndex

    console.log(done)

    const editedData = this.state.todoData.map((element, index) =>{
        if (element.id === item.id) {
          element.done = item.done
          todoItem = element
          todoIndex = index}
        return element
    })

    editedData.splice(todoIndex, 1)

    if (done === false) {
      editedData.push(todoItem)
    } else {
      editedData.unshift(todoItem)
    }

    this.setState({
        todoData : editedData
      })
  }

  deleteItem = (item) =>{
    this.setState({
        todoData: this.state.todoData.filter((i)=> i.id !== item.id)
      })
  }

  addItem = (value) => {
      this.setState({
        todoData : [this.createTodoItem(value), ...this.state.todoData,]
      })
  }
  
  editItem = (item) => {
        
    console.log('Edited:','"'+ item.text+ '"')
    
    const editedData = this.state.todoData.map((element) =>{
        if (element.id === item.id) {
          element.text = item.text}
        return element
    })

    this.setState({
        todoData : editedData
      })
  }

  render() {
    return (
      <div className='container'>
        <div className="app">
          <AppHeader/>
          <ItemAddForm
            onAdd = {this.addItem}
          />
          <TodoList
            todoItems = {this.state.todoData}
            onDelete = {this.deleteItem}
            onEdit = {this.editItem}
            onDone = {this.doneItem}
          />
        </div>
      </div>
    );
  }
}