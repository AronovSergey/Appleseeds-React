import React, { Component } from 'react';
import Button from './Button';

const colors = ["blue", "red", "yellow"];

class WhatIsTheColor extends Component {
    state = { color: '' };

    onButtonClick(color) {
        this.setState({ color: color })
    }

    render() {
        return (
            <div>
                {colors.map(color => <Button
                                        key={color}
                                        color={color} 
                                        handleClick={(color) => this.onButtonClick(color)}
                                     />
                )} 
                <br />
                <h1>{`The Color Selected is: ${this.state.color}`}</h1> 
            </div>
        );
    }
}

export default WhatIsTheColor;