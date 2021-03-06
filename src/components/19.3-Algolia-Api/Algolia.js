import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Algolia = () => {
    const [term, setTerm] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const fetchApi = async (searchTerm) => {
        try {
            setLoading(true);
            const { data } = await axios.get(`https://hn.algolia.com/api/v1/search?query=${searchTerm}`);
            setData(data.hits);
            setLoading(false)
        } catch (error) {
            setError(true);
        }
    };


    useEffect(() => {
        fetchApi('hooks')
    }, []); 

    
    const RenderAlgolia = () => {
        if(data.length)
            return (
                <ul>
                    {data.map(result => <li key={result.objectID}><a href={result.url}>{result.title}</a></li>)}
                </ul>
            )
        else return null;
    } 

    return (
        <div>
            {!loading && !error && (
                <div>
                    <input 
                        type="text"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                    <button onClick={() => fetchApi(term)}>search</button>
                    <RenderAlgolia />
                </div>
            )}

            {loading && !error && (
                <div>loading...</div>    
            )}

            {loading && error && (
                <div>error...</div>   
            )}
        </div>
    )
}

export default Algolia;
