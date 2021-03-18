import React, { Component } from 'react';

class TextArea extends Component {
    render() {
        return (
            <label
                className="input"
            >
                {this.props.label}
                <textarea 
                    name={this.props.name}
                    rows="4" 
                    cols="50"
                    onChange={this.props.onChange}
                >
                </textarea>

            </label>
        );
    }
}

export default TextArea;