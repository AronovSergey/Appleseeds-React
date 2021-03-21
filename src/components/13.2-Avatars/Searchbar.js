import React, { Component } from 'react';

class Searchbar extends Component {
    render() {
        return (
            <input
                value={this.props.value}
                onChange={this.props.onChange}
                style={{
                    width: "300px",
                    height: "40px",
                    marginLeft: "calc(46% - 150px)",
                    marginTop: "2%"
                }}
            />
        );
    }
}

export default Searchbar;