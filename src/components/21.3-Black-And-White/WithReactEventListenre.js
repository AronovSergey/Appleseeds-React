import React, { useState }  from 'react';

const WithReactEventListenre = ({ src }) => {
    const [colored, setColored] = useState(true);

    return (
        <img
            src={src}
            alt={src}
            className={`img ${colored ? "" : 'black-and-white'}`}
            onMouseLeave={ () => setColored(true) }
            onMouseEnter={ () => setColored(false) }
        />
    )
}

export default WithReactEventListenre;
