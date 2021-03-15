import React, { Component } from 'react';
import './style.css';

class Counter extends Component {
    constructor() {
        super();

        this.state = { counter: 0 };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ counter: this.state.counter + 1});
    }

    render() {
        return (
            <div className="counter">
                <button onClick={this.handleClick}>
                    increment
                </button>
                <h4>{this.state.counter}</h4>
            </div>
        );
    }
}

export default Counter;