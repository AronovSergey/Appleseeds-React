import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./style.css";

import Navbar from "./Navbar";
import All from "./All";
import Specific from "./Specific";
import Depositing from "./Depositing";
import Credit from "./Credit";
import Withdraw from "./Withdraw";
import Transferring from "./Transferring";

class Bank extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={All} />
            <Route path="/all" exact component={All} />
            <Route path="/search" exact component={Specific} />
            <Route path="/depositing" exact component={Depositing} />
            <Route path="/update_credit" exact component={Credit} />
            <Route path="/withdraw_money" exact component={Withdraw} />
            <Route path="/transferring" exact component={Transferring} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Bank;
