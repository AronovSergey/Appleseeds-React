import React, { Component } from 'react';
import './style.css'
import Input from './Input';
import Select from './Select';
import TextArea from './TextArea';


class Formreiew extends Component {
    state = {
        stage: 1,
        firstName: '',
        lastName: '',
        age: '1',
        freeText: '',
    }

    onInputChange(event) {
        this.setState({ [event.target.name] : event.target.value });
    }

    submitForm(event) {
        event.preventDefault();

        this.setState({ stage: 2 });
    }

    getRender() {
        if(this.state.stage === 1) {
            return (
                <form className="form" onSubmit={(event) => this.submitForm(event)}>
                    <Input 
                        label="First Name: "
                        name="firstName"
                        value={this.state.firstName}
                        onChange={(event) => this.onInputChange(event)}
                    />
                    <Input 
                        label="Last Name: "
                        name="lastName"
                        value={this.state.lastName}
                        onChange={(event) => this.onInputChange(event)}
                    />
                    <Select
                        label="Age: "
                        name="age"
                        onChange={(event) => this.onInputChange(event)}
                    />
                    <TextArea
                        label="Free Text: "
                        name="freeText" 
                        onChange={(event) => this.onInputChange(event)}
                    />
                    <input type={'submit'} value={'Continue'}/>
                </form>
            )
        }
        else if(this.state.stage === 2){
            return (
                <div>
                    {this.state.firstName}
                    <br />
                    {this.state.lastName}
                    <br />
                    {this.state.age}
                    <br />
                    {this.state.freeText}
                    <br />
                    <button 
                        onClick={() => this.setState({ stage: 1 })}
                    >
                        Back
                    </button>
                    <button
                        onClick={() => this.setState({ stage: 3 })}
                    >
                        Send Survey
                    </button>
                </div>
            )
        }
        else {
            return (
                <div>The form has been successfully submitted</div>
            )
        }
    }
    

    render() {
        return (
            this.getRender()   
        );
    }
}

export default Formreiew;