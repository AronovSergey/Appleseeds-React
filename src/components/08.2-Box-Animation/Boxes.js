import React, { Component } from 'react';
import Box from './Box';
import './style.css'

class Boxes extends Component {
    constructor() {
        super();
        this.myRef = React.createRef();
    }

    componentDidMount() {
        setTimeout(() => { this.myRef.current.focus(); }, 1000);
        setTimeout(() => { this.myRef.current.innerHTML = ""; }, 5000);

    }
    
    render() {
        return (
            <div 
                className="boxes"
                tabIndex="0"
                ref={this.myRef}
            >
                <Box size="200px" top="0px"/>
                <Box size="400px" top="210px"/>
                <Box size="100px" top="620px"/>
            </div>
        );
    }
}

export default Boxes;