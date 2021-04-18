import React, { useState, useEffect } from "react";
import axios from "axios";

const All = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:8000/api/bank");
      setData(response.data.users);
    })();
  }, []);

  return (
    <div>
      {data.map((user) => (
        <div className="card" key={user.id}>
          <h3>{`ID: ${user.id}`}</h3>
          <h4>{`Cash: ${user.cash}`}</h4>
          <h4>{`Credit: ${user.credit}`}</h4>
          <h4>{`Is active: ${user.isActive}`}</h4>
        </div>
      ))}
    </div>
  );
};

export default All;
