import React, { useState } from "react";
import axios from "axios";

const Specific = () => {
  const [parm, setParm] = useState("");
  const [data, setData] = useState(null);

  const onButtonClick = async () => {
    const result = await axios.get(`http://localhost:8000/api/bank/${parm}`);
    setData(result.data);
  };

  const RenderResponse = () => {
    if (data) {
      if (data.error) return <h2>{data.error}</h2>;
      else
        return (
          <div className="card">
            <h3>{`ID: ${data.user.id}`}</h3>
            <h4>{`Cash: ${data.user.cash}`}</h4>
            <h4>{`Credit: ${data.user.credit}`}</h4>
            <h4>{`Is active: ${data.user.isActive}`}</h4>
          </div>
        );
    } else return <h2>Search Result...</h2>;
  };

  return (
    <div>
      <input
        type="text"
        placeholder="write a id"
        value={parm}
        onChange={(e) => setParm(e.target.value)}
      />
      <button onClick={onButtonClick}>Search</button>
      <RenderResponse />
    </div>
  );
};

export default Specific;
