import React, { useState } from 'react'

const Text = ({ text, length }) => {
    const [hidden, setHidden] = useState(true);

    const onButtonClick = () => {
        setHidden(!hidden);
    }

    const renderText = () => {
        const start = text.split("").slice(0, length).join("");
        const end = text.split("").slice(length, text.length).join("");

        if(hidden){
            return(
                <span>
                    {start}
                    <button onClick={() => onButtonClick()}>read more</button>
                </span>
            )
        }
        else {
            return(
                <span>
                    {start}
                    {end}
                    <button onClick={() => onButtonClick()}>show less</button>
                </span>
            )
        }
    }

    return (
        text.length <= length ? 
            <span>{text}</span> :
            renderText()
    )
}

export default Text;
