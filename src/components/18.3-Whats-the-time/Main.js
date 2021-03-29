import React, { useState } from 'react';

const Main = () => {
    const [seconds, setSeconds] = useState("");

    const onInputChange = (event) => {
        if(event.target.name === "seconds"){
            setSeconds(event.target.value)
        }
        else if(event.target.name === "minutes"){
            setSeconds(event.target.value * 60)
        }
        else if(event.target.name === "hours"){
            setSeconds(event.target.value * 3600)
        }
    }

    return (
        <div>
            <div>
                <label>
                    Seconds:
                    <input 
                        type="number"
                        name="seconds"
                        value={seconds / 1}
                        onChange={onInputChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Minutes:
                    <input 
                        type="number"
                        name="minutes"
                        value={seconds / 60}
                        onChange={onInputChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Hours:
                    <input 
                        type="number"
                        name="hours"
                        value={seconds / 3600}
                        onChange={onInputChange}
                    />
                </label>
            </div>
        </div>
    )
}

export default Main;
