import React, { Component } from 'react';

class Button extends Component {
    state = { color: this.props.color }

    render() {
        return (
            <button
                style={{
                    backgroundColor: this.state.color,
                    border: "6px solid #777",
                    padding: '10px',
                    width: '150px',
                    height: '60px',
                    display: 'block',
                    fontSize: '26px',
                    fontWeight: '600'
                }}
                onClick={() => this.props.handleClick(this.state.color)}
            >
                {this.state.color}
            </button>
        );
    }
}

export default Button;