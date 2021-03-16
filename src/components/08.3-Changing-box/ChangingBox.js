import React, { Component } from 'react';

const colors = ['#FFC312', '#C4E538', '#12CBC4', '#FFC312', '#ED4C67']

class ChangingBox extends Component {
    constructor(){
        super();

        this.interval = null;
        this.state = { index : 0 }
    }
    

    
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ index: (this.state.index + 1) % 5 })
        }, 500);    
    }

    render() {
        return (
            <div
                style={{
                    width: '200px',
                    height: '200px',
                    backgroundColor: colors[this.state.index]
                }}
            >
            </div>
        );
    }
}

export default ChangingBox;