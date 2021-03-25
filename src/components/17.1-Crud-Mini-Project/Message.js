import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

const Message = (props) => {
    const [inEdit, setInEdit] = useState(false);
    const [body, setBody] = useState(props.body);


    function onEditClick() {
        setInEdit(!inEdit)
    }

    function onCheckClick() {
        onEditClick();
        props.onUpdate(props.id, body);
    }

    function calcTime() {
        const diffTime = Math.abs(new Date() - new Date(props.editAt));
        const diffDays = Math.ceil(diffTime / (1000 * 60)); 
        return(diffDays)
    }

    return (
        <div>
            {inEdit && (
                <div className="message">
                    {`${props.name}: `} 
                     
                    <input 
                        value={body}
                        onChange={(event) => setBody(event.target.value)}
                        className="message__input" 
                        onKeyDown={(event) => { if(event.key === 'Enter') onCheckClick() }}
                    /> 
                    
                    <div className="icon">
                        <FontAwesomeIcon 
                            icon={faCheck} 
                            onClick={() => onCheckClick()}
                        />
                    </div>
                    <div className="icon delete-icon">
                        <FontAwesomeIcon 
                            icon={faTrash} 
                            onClick={() => props.onRemove(props.id)}   
                        />
                    </div>
                </div>
            )}
            {!inEdit && (
                <div className="message">
                    <div className="message__text">
                        {`${props.name}: ${body}`} 
                        <div className="message__edit-at">
                            {props.hasBeenEdit === true ? `updated ${calcTime()} minutes ago` : ""}
                        </div>
                    </div>
                    
                    <div className="icon">
                        <FontAwesomeIcon 
                            icon={faEdit} 
                            onClick={() => onEditClick()}
                        />
                    </div>
                    <div className="icon delete-icon">
                        <FontAwesomeIcon 
                            icon={faTrash} 
                            onClick={() => props.onRemove(props.id)}    
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Message;
