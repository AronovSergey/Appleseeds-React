import React from 'react'
import Message from './Message'

const ChatArea = ({ messages, onRemove }) => {
    return (
        <div className="chat-area">
            {messages.map(message => (
                <Message 
                    key={message.id}
                    id={message.id}
                    body={message.body}
                    name={message.name}
                    onRemove={onRemove}
                />
            ))}

        </div>
    )
}

export default ChatArea;
