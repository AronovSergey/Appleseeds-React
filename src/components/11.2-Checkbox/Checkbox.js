import React, { Component } from 'react';

class Checkbox extends Component {
    state = {
        id: this.props.id,
        value: this.props.value,
        isChecked: this.props.isChecked,
    }

    onCheckboxChange() {
        this.setState({ isChecked: !this.state.isChecked });
        this.props.onCheckboxChangeFather(this.state.id);
    }

    render() {
        return (
            <label 
                style={{ 
                    display: 'block',
                    margin: '10px'
                }}
            >
                <input
                    type="checkbox"
                    checked={this.state.isChecked}
                    onChange={() => this.onCheckboxChange()}
                />
                {this.state.value}
            </label>
        );
    }
}

export default Checkbox;