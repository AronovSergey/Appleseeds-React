import React from 'react';
import ImgView from './ImgView';
import './style.css';

const BlackAndWhite = () => {
    return (
        <div>
            <ImgView
                src='https://source.unsplash.com/random' 
            />
            <ImgView 
                src='https://source.unsplash.com/random' 
            />
        </div>
    )
}

export default BlackAndWhite;
