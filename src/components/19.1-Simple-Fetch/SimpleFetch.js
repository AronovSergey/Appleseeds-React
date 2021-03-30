import axios from 'axios';
import React, { useState, useEffect } from 'react';

const SimpleFetch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await axios.get('https://swapi.dev/api/films/');
            setData(result.data.results)
        })();
    }, [])

    const renderMovies = () => {
        if(!data.length)
            return <div>Loading...</div>
        else
            return (
                <div>
                    {data.map(movie => <div key={movie.episode_id}>{`${movie.title} :  ${movie.director}`}</div>)}
                </div>
            );
    }

    return (renderMovies());
}

export default SimpleFetch;
