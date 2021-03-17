import React, { Component } from 'react';
import './style.css';

class Spinner extends Component {
    state = { timmer: 4, loading: true }

    componentDidMount() {
        setTimeout(() => {this.setState({ timmer: this.state.timmer - 1 })}, 1000);
        setTimeout(() => {this.setState({ timmer: this.state.timmer - 1 })}, 2000);
        setTimeout(() => {this.setState({ timmer: this.state.timmer - 1 })}, 3000);
        setTimeout(() => {this.setState({ timmer: this.state.timmer - 1, loading: false })}, 4000);
    }

    render() {
        return (
            <div>
                <h1>{this.state.timmer}</h1>
                {this.state.loading && 
                    <div class="spinner">
                        <div class="dot-1"></div>
                        <div class="dot-2"></div>
                        <div class="dot-3"></div>
                    </div>
                }
            </div>
        );
    }
}

export default Spinner;