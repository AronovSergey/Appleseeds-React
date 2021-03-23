import React, { Component } from 'react';
import { Link } from "react-router-dom";

import data from './store';


class Products extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        this.setState({ data: data });
    }

    render() {
        return (
            <div
                style={{
                    padding: "15px 0"
                }}
            >
                {
                    this.state.data.map(product => (
                        <Link   
                            to={`/products/${product.id}`}
                            key={product.id}    
                            className="products__link"
                        >
                            {product.title}
                        </Link>
                    ))
                }
            </div>
        );
    }
}

export default Products;