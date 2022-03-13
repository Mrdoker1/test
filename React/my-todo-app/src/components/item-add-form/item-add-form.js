import React, { Component } from "react";
import './item-add-form.scss';
import { AddAlt20 } from '@carbon/icons-react';

export default class ItemAddForm extends Component {

    state = {
        value: ''
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    clickHandler = () => {
        if (this.state.value.trim().length === 0) return;
            this.props.onAdd(this.state.value)
            this.setState({
            value: ''
    })}

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            if (this.state.value.trim().length === 0) return;
            this.props.onAdd(this.state.value)
            this.setState({
            value: ''
        })
    }}

    render() {

        return (<div className='item-add-form'>
            <input
                className='item-add-input'
                onChange={this.onChange}
                placeholder='Insert your task'
                value = {this.state.value}
                onKeyPress={this.handleKeyPress}
                />
            <div className="actions">
                <button 
                    className="add" 
                    onClick={this.clickHandler}>
                    <AddAlt20/></button>
            </div>
        </div>);
    }
}