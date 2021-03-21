import React, { Component } from 'react';

class Person extends Component {
    render() {
        return (
            <div>
                {`Name: ${this.props.name}`}
                <br />
                {`Birthday: ${this.props.birthday}`}
                <br />
                {`Favorite food:`}
                <br />
                <div style={{ paddingLeft: "15px" }} >
                    {`Meats: ${this.props.favoriteFoods.meats}`}
                    <br />
                    {`Fish: ${this.props.favoriteFoods.fish}`}
                    <br />
                </div>
                <br />
            </div>
        );
    }
}

export default Person;