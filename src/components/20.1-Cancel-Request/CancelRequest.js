import React, { useState } from 'react';
import RandomChuckNorris from './RandomChuckNorris';

const CancelRequest = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>{toggle ? 'Hide Joke' : 'Display Joke'}</button>
            {toggle ? <RandomChuckNorris /> : null}
        </div>
    )
}

export default CancelRequest;
