import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div
                style={{
                    padding: "15px",
                    margin: "10px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    width: "250px",
                    height: "250px",
                    border: "2px solid black",
                    borderRadius: "6px",
                }}
            >
                <img 
                    src={this.props.avatar}
                    alt={this.props.name}
                    style={{
                        height: "200px",
                        width: "200px"
                    }}
                />
                <div
                    style={{
                        display: "inline",
                        fontSize: "20px",
                        fontWeight: "500",
                    }}
                >{this.props.name}</div>
            </div>
        );
    }
}

export default User;