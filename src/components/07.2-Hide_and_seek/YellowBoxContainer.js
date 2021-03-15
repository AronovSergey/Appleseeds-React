import React, { Component } from 'react';
import './style.css';

class YellowBoxContainer extends Component {
    constructor() {
        super();

        this.state = { displayBox: false }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ displayBox: !this.state.displayBox })
    }

    render() {
        return (
            <div className="container">
                <button onClick={this.handleClick}>
                    show / hide
                </button>
                {this.state.displayBox &&
                    <div className="yellow">

                    </div>
                }
            </div>
        );
    }
}

export default YellowBoxContainer;