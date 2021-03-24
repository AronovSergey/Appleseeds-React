import axios from 'axios';
import React, { Component } from 'react';
import ChatArea from './ChatArea';
import InputArea from './InputArea';

import './style.css'

class Whatsapp extends Component {
    state={
        messages: [],
        body: "",
        name: "Sergey"
    }

    async componentDidMount() {
        try {
            const response = await axios.get('https://605b28aa27f0050017c06549.mockapi.io/api/v1/messages');
            
            this.setState({
                messages: response.data
            });
        } catch (error) {
            console.error(error);
        }
    }

    onInputChange(event) {
        this.setState({ body: event.target.value })
    }

    async create(event) {
        if(event.key === 'Enter') {
            try {
                const response = await axios.post('https://605b28aa27f0050017c06549.mockapi.io/api/v1/messages', {
                    body: this.state.body,
                    name: this.state.name
                });
                
                
                const newMessages = this.state.messages;
                newMessages.push(response.data);


                this.setState({
                    messages: newMessages,
                    body: "",
                });

            } catch (error) {
                console.error(error);
            }
        }
    }    

    indexOfID(id) {
        let result = -1;

        this.state.messages.forEach((message, index) => {
            if(message.id === id)
                result = index;
        })

        return result;
    }

    async remove(id){
        const index = this.indexOfID(id);

        const newMessages = this.state.messages;
        newMessages.splice(index, 1);

        this.setState({ messages: newMessages });

        await axios.delete(`https://605b28aa27f0050017c06549.mockapi.io/api/v1/messages/${id}`);
    }

    render() {
        return (
            <div
                className="whatsapp"
            >
                <ChatArea 
                    messages={this.state.messages}
                    onRemove={id => this.remove(id)}
                />
                <InputArea 
                    onChange={(event) => this.onInputChange(event)}
                    onInputKeyDown={(event) => this.create(event)}
                    body={this.state.body}
                />
            </div>
        );
    }
}

export default Whatsapp;