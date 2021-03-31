import React, { useRef, useEffect, useState } from 'react';

const ImgView = ({ src }) => {
    const imgRef = useRef();
    const [colored, setColored] = useState(true);

    useEffect(() => {
        imgRef.current.addEventListener('mouseover', () => setColored(false));
        imgRef.current.addEventListener('mouseout', () => setColored(true));
    }, [])

    return (
        <img
            src={src}
            alt={src}
            ref={imgRef}
            className={`img ${colored ? "" : 'black-and-white'}`}
        />
    )
}

export default ImgView;
