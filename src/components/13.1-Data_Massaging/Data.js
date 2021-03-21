import React, { Component } from 'react';
import Name from './Name';
import Person from './Person';

const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Johnny",
        birthday: "1-10-1992",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

class Data extends Component {
    state = {
        data: [...data],
        names: [],
        before1990: [],
    }

    getAllTheNames() {
        return this.state.data.map(person => person.name)
    }

    getAllThatAreBornBefore1990() {
        return this.state.data.filter(person => {
            const birthday = person.birthday;

            const year = birthday
                            .split("")
                            .slice(birthday.length - 4, birthday.length)
                            .join("");
            
            if(parseInt(year) < 1990) return true;

            return false;
        })
    }

    componentDidMount() {
        this.setState({
            names: this.getAllTheNames(),
            before1990: this.getAllThatAreBornBefore1990()
        })
    }

    render() {
        return (
            <div>
                <div style={{ margin: "20px"}}>
                    <h1>Data</h1>
                    {this.state.data.map((person, index) => {
                        return (
                            <Person
                                key={index}
                                name={person.name}
                                birthday={person.birthday}
                                favoriteFoods={person.favoriteFoods}
                            />
                        )
                    })}
                </div>


                <div style={{ margin: "20px"}}>
                    <h1>All the names from the object</h1>
                    {this.state.data.map((person, index) => {
                        return (
                            <Name 
                                key={index}
                                name={person.name}
                            />
                        )
                    })}
                </div>

                <div style={{ margin: "20px"}}>
                    <h1>All the people that are born before 1990</h1>
                    {this.state.before1990.map((person, index) => {
                        return (
                            <Person
                                key={index}
                                name={person.name}
                                birthday={person.birthday}
                                favoriteFoods={person.favoriteFoods}
                            />
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Data;