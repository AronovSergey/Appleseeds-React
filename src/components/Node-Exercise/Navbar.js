import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/all" className="link">
        Show All Users
      </Link>
      <Link to="/search" className="link">
        Specific User
      </Link>
      <Link to="/depositing" className="link">
        Depositing
      </Link>
      <Link to="/update_credit" className="link">
        Update Credit
      </Link>
      <Link to="/withdraw_money" className="link">
        Withdraw Money
      </Link>
      <Link to="/transferring" className="link">
        Transferring
      </Link>
    </div>
  );
};

export default Navbar;
