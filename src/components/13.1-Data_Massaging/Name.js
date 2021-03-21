import React, { Component } from 'react';

class Name extends Component {
    render() {
        return (
            <div style={{ fontWeight: "700" }} >
                {this.props.name}
            </div>
        );
    }
}

export default Name;