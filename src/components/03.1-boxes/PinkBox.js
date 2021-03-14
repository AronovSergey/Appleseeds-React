import React, { Component } from 'react';
import PurpleBox from './PurpleBox'

class PinkBox extends Component {
    render() {
        return (
            <div className="pink">
                <PurpleBox />
                <PurpleBox />
            </div>
        );
    }
}

export default PinkBox;