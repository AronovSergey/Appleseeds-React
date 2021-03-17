import React, { Component } from 'react';
import Checkbox from './Checkbox';

const content = [
    'I read the term of the app',
    'I accept the term of the app',
    'I want to get the weekly news letter',
    'I want to get sales and offers'
]

class CheckboxContainer extends Component {
    state = { 
        isCheckedArr: [false, false, true, true],
    }

    onCheckboxChange(index) {
        let newArr = this.state.isCheckedArr;
        newArr[index] = !newArr[index];
        this.setState({ isCheckedArr: newArr })
    }

    render() {
        return (
            <form>
                {this.state.isCheckedArr.map((isChecked, index) => {
                    return  <Checkbox 
                                key={index}
                                id={index}
                                value={content[index]}
                                isChecked={isChecked}
                                onCheckboxChangeFather={(i) => this.onCheckboxChange(i)} 
                            />
                })}
            </form>
        );
    }
}

export default CheckboxContainer;