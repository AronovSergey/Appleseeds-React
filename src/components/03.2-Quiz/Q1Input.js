import React, { Component } from 'react';

class Q1Input extends Component {
    render() {
        return (
            <div>
                <input type="range" min="1" max="3"></input>
            </div>
        );
    }
}

export default Q1Input;