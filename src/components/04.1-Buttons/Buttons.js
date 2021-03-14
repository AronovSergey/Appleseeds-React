import React, { Component } from 'react';
import MyButton from './MyButton';
import './style.css';

class Buttons extends Component {
    render() {
        return (
            <div className="buttons">
                <MyButton bold={true}>Important</MyButton>
                <MyButton bold={false}>Not Important</MyButton>
            </div>
        );
    }
}

export default Buttons;