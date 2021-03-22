import React, { Component } from 'react';

class Focus extends Component {
    constructor() {
        super();

        this.state = { value: ""} 

        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus()
    } 

    render() {
        console.log(this.state.value)
        return (
            <label>
                Some Input Field
                <br />
                <input
                    type="text"
                    value={this.state.value}
                    onChange={(event) => this.setState({ value: event.target.value })}
                    ref={this.inputRef}
                />
            </label>
        );
    }
}

export default Focus;