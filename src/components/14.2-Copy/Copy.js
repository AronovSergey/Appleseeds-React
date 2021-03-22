import React, { Component } from 'react';

class Copy extends Component {
    constructor() {
        super();

        this.state = { value: "" }

        this.textareaRef = React.createRef()
    }

    onButtonClick() {
        this.textareaRef.current.select();
        document.execCommand("copy");
    }

    render() {
        return (
            <div 
                style={{
                    margin: "20px",
                    padding: "40px",
                    backgroundColor: "#30336b",
                    width: "fit-content",
                    color: "white",
                    textAlign: "center"
                }}
            >
                <h1>What is the meaning of life?</h1>
                <textarea
                    value={this.state.value}
                    type="textarea"
                    rows="5"
                    cols="50"
                    onChange={(event) => this.setState({ value: event.target.value })}
                    ref={this.textareaRef}
                />
                <br />
                <button
                    onClick={() => this.onButtonClick()}
                >COPY</button>
            </div>
        );
    }
}

export default Copy;