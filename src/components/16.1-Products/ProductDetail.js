import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Products from './Products';


import data from './store';

class ProductDetail extends Component {
    render() {
        const product = data[this.props.match.params.id - 1]
        return (
            <div>
                <Products />
                <div className="product">
                    <h1>{product.title}</h1>
                    <h3>{product.price}</h3>
                    <img src={product.imageUrl} alt={product.title} />
                    <Link 
                        to="/products"
                        style={{
                            display: "block"
                        }}
                    >
                        <button>Back</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default ProductDetail;