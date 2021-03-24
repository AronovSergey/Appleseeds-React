import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Message = (props) => {
    return (
        <div className="message">
            {`${props.name}: ${props.body}`}
            <div className="icon">
                <FontAwesomeIcon 
                    icon={faEdit} 
                    
                />
            </div>
            <div className="icon delete-icon">
                <FontAwesomeIcon 
                    icon={faTrash} 
                    onClick={() => props.onRemove(props.id)}    
                />
            </div>
        </div>
    )
}

export default Message;
