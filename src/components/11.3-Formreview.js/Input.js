import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <label
                className="input"
            >
                {this.props.label}
                <input 
                    type="text"
                    value={this.props.value}
                    name={this.props.name}
                    onChange={this.props.onChange}
                >
                </input>
            </label>
        );
    }
}

export default Input;