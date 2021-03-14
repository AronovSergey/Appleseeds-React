import React, { Component } from 'react';
import './boxes.css';
import BlueBox from './BlueBox';

class GreenBox extends Component {
    render() {
        return (
            <div className="green">
                <BlueBox />
            </div>
        );
    }
}

export default GreenBox;