import React from "react";
import TwoInputs from "./TwoInputs";

const Withdraw = () => {
  return (
    <TwoInputs
      type="withdraw"
      buttonName="Withdraw"
      placeholder="how much you want to withdraw?"
    />
  );
};

export default Withdraw;
