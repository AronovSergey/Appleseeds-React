import React, { useState } from "react";
import axios from "axios";

const Transferring = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [data, setData] = useState(null);

  const onButtonClick = async () => {
    const result = await axios.put(
      `http://localhost:8000/api/bank/transform/${from}/${to}`,
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
        placeholder="from"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <input
        type="text"
        placeholder="to"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <input
        type="text"
        placeholder="write the amount of money"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={onButtonClick}>Submit</button>
      <RenderResponse />
    </div>
  );
};

export default Transferring;
