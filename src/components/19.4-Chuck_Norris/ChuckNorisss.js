import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

const ChuckNoriss = () => {
    const [joke, setJoke] = useState("");
    const [jokeByCategory, setJokeByCategory] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('https://api.chucknorris.io/jokes/categories');
                setCategories(response.data.map(category => ({ value: category, label: category })))
                setSelectedOption(response.data[0])
            } catch (error) {
                console.error(error);
            }
        })()
    }, []);

    const onButtonClick = async () => {
        try {
            const response = await axios.get('https://api.chucknorris.io/jokes/random');
            setJoke(response.data.value);
        } catch (error) {
            console.error(error);
        }
    }

    const onSelectChange = async selectedOption => {
        try {
            const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${selectedOption.value}`);
            
            setJokeByCategory(response.data.value);
            setSelectedOption(selectedOption)
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div>
            <button
                onClick={() => onButtonClick()}
            >
                Get a random joke...
            </button>
            <div>
                {joke}
            </div>
            <Select 
                value={selectedOption} 
                onChange={onSelectChange}
                options={categories}
            />
            <div>
                {jokeByCategory}
            </div>
        </div>
    );
    
}

export default ChuckNoriss;