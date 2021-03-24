import React, { Component } from 'react';

class InputArea extends Component {
    render() {
        return (
            <div className="input-area">
                <input 
                    className="input-area__input" 
                    type="text" 
                    value={this.props.body}
                    placeholder="Type a message"
                    onChange={this.props.onChange}
                    onKeyDown={this.props.onInputKeyDown}
                />
            </div>
        );
    }
}

export default InputArea;