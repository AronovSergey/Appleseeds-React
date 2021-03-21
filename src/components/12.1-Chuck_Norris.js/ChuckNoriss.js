import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';

class ChuckNoriss extends Component {
    state = {
        joke: null,
        jokeByCategory: null,
        selectedOption: null,
        categories: []
    }


    async componentDidMount() {
        try {
            const response = await axios.get('https://api.chucknorris.io/jokes/categories');
            
            this.setState({
                categories: response.data.map(category => ({ value: category, label: category })),
                selectedOption: response.data[0]
            });
        } catch (error) {
            console.error(error);
        }
    }

    async onButtonClick() {
        try {
            const response = await axios.get('https://api.chucknorris.io/jokes/random');
            this.setState({ joke: response.data.value });
        } catch (error) {
            console.error(error);
        }
    }

    onSelectChange = async selectedOption => {
        try {
            const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${selectedOption.value}`);
            
            this.setState({
                jokeByCategory: response.data.value,
                selectedOption: selectedOption,
            });
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        return (
            <div>
                <button
                    onClick={() => this.onButtonClick()}
                >
                    Get a random joke...
                </button>
                <div>
                    {this.state.joke}
                </div>
                <Select 
                    value={this.state.selectedOption} 
                    onChange={this.onSelectChange}
                    options={this.state.categories}
                />
                <div>
                    {this.state.jokeByCategory}
                </div>
            </div>
        );
    }
}

export default ChuckNoriss;