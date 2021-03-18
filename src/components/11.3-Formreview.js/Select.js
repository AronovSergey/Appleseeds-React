import React, { Component } from 'react';




class Select extends Component {
    render() {
        return (
            <label

                className="input"
            >   
                {this.props.label}
                <select 
                    name={this.props.name}
                    onChange={this.props.onChange}
                >
                    <option value="1" defaultValue>1</option>
                    <option value="2">2</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                </select>
            </label>
        );
    }
}

export default Select;