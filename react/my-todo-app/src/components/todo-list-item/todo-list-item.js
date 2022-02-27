import React, { Component } from "react";
import './todo-list-item.scss'
import { TrashCan20, Edit20, Close20, Save20 } from '@carbon/icons-react';

export default class TodoListItem extends Component {

    state = {
        isEdit: false,
        value: this.props.todoValue.text.trim(),
        height: 0,
        done: this.props.todoValue.done
    }

    onEdit = () => {
        this.setState({
            isEdit: true
        })
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    onDelete = (e) => {
        this.props.onDelete(this.props.todoValue)
    }

    onSave = (e) => {
        if (this.state.value.trim().length === 0) return;

        this.setState({
            isEdit: false,
            value: this.state.value.trim()
        })

        this.props.saveItem({
            text: this.state.value,
            done: this.props.todoValue.done,
            id: this.props.todoValue.id
        })

    }

    onCancel = (e) => {
        this.setState({
            value: this.props.todoValue.text,
            isEdit: false
        })
    }

    onDone = (e) => {

        if (this.state.done === true) {
            this.setState({
                done: false
            })
        } else {
            this.setState({
                done: true
            })
        }
        this.props.onDone(this.props.todoValue, this.state.done)
    }

    render() {

        let classItem = 'list-item';
        let classText = 'todo-list-text';
        let classActions = 'actions';

        if (this.state.done === true) {
            classText = 'todo-list-text done'
            classActions = 'actions hide'
            classItem = 'list-item done';
        }

        if (this.state.isEdit === true) {
            classText = 'todo-list-text edit';
        }

        return (
            <div className={classItem}>

            { this.state.isEdit ?
                <span className={classText} onChange={this.onChange} contentEditable>{this.state.value}</span> :
                <span className={classText} onClick={this.onDone}>{this.state.value}</span>             
            }
            { this.state.isEdit ?
                <div className={classActions}>
                    <button className="save" onClick={this.onSave}><Save20 /></button>
                    <button className="close" onClick={this.onCancel}><Close20 /></button>
                </div> :
                <div className={classActions}>
                    <button className="edit" onClick={this.onEdit}><Edit20 /></button>
                    <button className="delete" onClick={this.onDelete}><TrashCan20 /></button>
                </div>
            }
            </div>
    )
}}