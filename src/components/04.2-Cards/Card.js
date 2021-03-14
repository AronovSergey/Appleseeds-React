import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.img} alt={this.props.img}/>
                <h2>{this.props.title}</h2>
                <h3>{this.props.description}</h3>
                <div className="links">
                    <a href={this.props.firstLink}>SHARE</a> 
                    <a href={this.props.secondLink}>EXPLORE</a> 
                </div>
            </div>
        );
    }
}

export default Card;