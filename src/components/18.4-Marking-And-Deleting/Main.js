import React, { useState } from 'react';

const initialState = ["one", "two", "three", "four", "five"];

const Main = () => {
    const [data, setData] = useState(initialState.map(item => ({value: item, checked: false})));

    const onResetClick = () => {
        setData(initialState.map(item => ({value: item, checked: false})));
    }

    const onDeleteClick = () => {
        const newData = data.filter(item => !item.checked);
        setData(newData);
    }

    const onCheckboxChange = (index) => {
        const newData = [...data];
        newData[index].checked = !newData[index].checked;
        setData(newData);
    }
    
    
    return (
        <div>
            <div>
                <button onClick={onDeleteClick}>Delete</button>
                <button onClick={onResetClick}>Reset</button>
            </div>
            <div>
                <ul>
                    {
                        data.map((item, index) => (
                            <li
                                key={index}
                            >
                                <input
                                    type="checkbox"
                                    name={item.value}
                                    checked={item.checked}
                                    onChange={() => onCheckboxChange(index)} 
                                />
                                {item.value}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Main;
