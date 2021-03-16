import React, { Component } from 'react';

class Box extends Component {
    render() {
        return (
            <div 
                className="box"
                style={{
                    width: this.props.size,
                    height: this.props.size,
                    top: this.props.top
                }}
                ref={this.myRef}
            >
            </div>
        );
    }
}

export default Box;