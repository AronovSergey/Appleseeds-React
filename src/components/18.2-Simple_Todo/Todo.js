import React, { useState } from 'react';

const initialState = [
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
];

const Todo = () => {
    const [data, setData] = useState(initialState);

    const onItemClick = (index) => {
        const newData = [...data];
        newData[index].completed = !newData[index].completed;
        setData(newData);
    }

    return (
        <div>
            {data.map((item, index) => (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "200px",
                        margin: "10px",
                        fontSize: "20px",
                        cursor: "pointer",
                    }}
                    onClick={() => onItemClick(index)}
                >
                    <div
                        style={{
                            textDecoration: item.completed ? "line-through" : "none"
                        }}
                    >
                        {item.name}
                    </div>
                    {item.completed ? '\u2718' : '\u2714'}
                </div>
            ))}
        </div>
    )
}

export default Todo;
