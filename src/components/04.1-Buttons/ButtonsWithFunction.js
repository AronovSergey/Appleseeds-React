import React from 'react';
import MyButtonWithFunction from './MyButtonWithFunction';
import './style.css';

const ButtonsWithFunction = () => {
    return (
        <div className="buttons">
            <MyButtonWithFunction bold={true}>Important</MyButtonWithFunction>
            <MyButtonWithFunction bold={false}>Not Important</MyButtonWithFunction>
        </div>
    )
}

export default ButtonsWithFunction;
