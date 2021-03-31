import axios from 'axios';
import React, { useState, useEffect } from 'react';

const RandomChuckNorris = () => {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        let cancel;

        (async () => {
            try {
                const { data } = await axios.get('https://api.chucknorris.io/jokes/random', {
                    cancelToken: new axios.CancelToken(function executor(c) {
                        // An executor function receives a cancel function as a parameter
                         cancel = c;
                    })
                });
                setJoke(data.value)
            } catch (error) {
                console.log(error);
            }
        })();

        return (() => {
            cancel();
        })
        
    }, [])

    return (
        <div>
            {joke}
        </div>
    )
}

export default RandomChuckNorris;
