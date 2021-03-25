import React from 'react'
import Message from './Message'

const ChatArea = ({ messages, onRemove, onUpdate }) => {
    return (
        <div className="chat-area">
            {messages.map(message => (
                <Message 
                    key={message.id}
                    id={message.id}
                    body={message.body}
                    name={message.name}
                    hasBeenEdit={message.hasBeenEdit}
                    onRemove={onRemove}
                    onUpdate={onUpdate}
                    editAt={message.editAt}
                />
            ))}

        </div>
    )
}

export default ChatArea;
