import React, { Component } from 'react';

class MyButton extends Component {
    render() {
        return (
            <div>
                <button className={this.props.bold ? 'bold' : ''}>
                    {this.props.children}
                </button>
            </div>
        );
    }
}

export default MyButton;