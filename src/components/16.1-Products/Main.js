import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from './Header';

import './products.css';
import Homepage from './Homepage';
import Products from './Products';
import ProductDetail from './ProductDetail';

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>q
                        <Route path="/" exact component={Homepage} />
                        <Route path="/products/:id" exact component={ProductDetail} />
                        <Route path="/products" component={Products} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;