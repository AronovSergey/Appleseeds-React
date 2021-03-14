import React, { Component } from 'react';
import PinkBox from './PinkBox';


class BlueBox extends Component {
    render() {
        return (
            <div className="blue">
                <PinkBox />
            </div>
        );
    }
}

export default BlueBox;