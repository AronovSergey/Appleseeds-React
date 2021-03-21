import axios from 'axios';
import React, { Component } from 'react';
import Searchbar from './Searchbar';
import User from './User';

class RandomAvatar extends Component {
    state = {
        searchExpression: "",
        users: []
    }

    async componentDidMount() {
        const response = await axios.get('https://randomuser.me/api/?results=10');
        this.setState({ 
            users: response.data.results.map(user => {
                return({
                    name: user.name.first + user.name.last,
                    avatar: user.picture.large
                })
            }) 
        });
    }

    onInputChange(event) {
        this.setState({ searchExpression: event.target.value })
    }


    render() {
        return (
            <div>
                <Searchbar 
                    value={this.state.value}
                    onChange={(event) => this.onInputChange(event)}
                />
                <div
                    style={{
                        display: "flex",
                        margin: "2% 5%",
                        flexWrap: "wrap",
                        width: "90%",
                    }}
                >   
                    {
                        this.state.users
                            .filter(user => (
                                user.name.toLowerCase().includes(this.state.searchExpression.toLowerCase())
                            ))
                            .map(user => (
                                <User 
                                    name={user.name}
                                    avatar={user.avatar}
                                />
                            ))
                    }
                </div>
            </div>
        );
    }
}

export default RandomAvatar;