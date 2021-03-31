import React, { useState, useEffect, useRef } from 'react';

const Editing = () => {
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState('')

    const ref = useRef();

    useEffect(() => {
        if(edit)
            ref.current.focus();
    }, [edit])

    return (
        <div>
            {!edit && (
                <button onClick={() => setEdit(!edit)}>edit</button>
            )}
            {edit && (
                <div>
                    <input ref={ref} value={text} onChange={e => setText(e.target.value)} />
                    <button onClick={() => setEdit(!edit)}>save</button>
                </div>
            )}
        </div>
    )
}

export default Editing;
