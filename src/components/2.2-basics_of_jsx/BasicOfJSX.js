const data = ["hello", "world"];

const number1 = 5;
const number2 = 6;

const string = "I love React!";

const BasicOfJSX = () => {
    return (
        <div>
            {`${data[0]} ${data[1]}`}
            <br />
            {number1 + number2}
            <br />
            {string.length}
        </div>
    )
}

export default BasicOfJSX;