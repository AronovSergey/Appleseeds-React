import axios from "axios";
import React, { useState } from "react";

const TwoInputs = ({ type, buttonName, placeholder }) => {
  const [id, setId] = useState("");
  const [amount, setAmount] = useState("");
  const [data, setData] = useState(null);

  const onButtonClick = async () => {
    const result = await axios.put(
      `http://localhost:8000/api/bank/${type}/${id}`,
      {
        amount,
      }
    );
    setData(result.data);
  };

  const RenderResponse = () => {
    if (data) {
      if (data.error) {
        return <h2>{`Error: ${data.error}`}</h2>;
      } else {
        return <h2>{`Success: ${data.message}`}</h2>;
      }
    } else return <div></div>;
  };

  return (
    <div>
      <input
        type="text"
        placeholder="write a id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        placeholder={placeholder}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={onButtonClick}>{buttonName}</button>
      <RenderResponse />
    </div>
  );
};

export default TwoInputs;
