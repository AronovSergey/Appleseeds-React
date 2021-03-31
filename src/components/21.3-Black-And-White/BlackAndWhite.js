import React from 'react';
import ImgView from './ImgView';
import './style.css';
import WithReactEventListenre from './WithReactEventListenre';

const BlackAndWhite = () => {
    return (
        <div>
            <WithReactEventListenre
                src='https://source.unsplash.com/random' 
            />
            <WithReactEventListenre 
                src='https://source.unsplash.com/random' 
            />
        </div>
    )
}

export default BlackAndWhite;
