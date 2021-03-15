import React from 'react';

const MyButtonWithFunction = (props) => {
    return (
        <button className={props.bold ? 'bold' : ''}>
                {props.children}
        </button>
    )
}

export default MyButtonWithFunction;
