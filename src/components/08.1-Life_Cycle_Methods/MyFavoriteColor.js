import React, { Component } from 'react';

class  MyFavoriteColor extends Component {
    constructor() {
        super();

        this.state = { favoriteColor: 'red' };

        this.myRef = React.createRef();
    }

    componentDidMount() {
        setTimeout(() => this.setState({ favoriteColor: 'blue' }), 1000);
    }
    
    componentDidUpdate() {
        this.myRef.current.innerHTML = `My favorite color is ${this.state.favoriteColor}`;
    }

    render() {
        return (
            <div>
                <h1>{`My favorite color is ${this.state.favoriteColor}`}</h1>
                <div id="div" ref={this.myRef}></div>
            </div>
        );
    }
}

export default  MyFavoriteColor;