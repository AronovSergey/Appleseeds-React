import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="link">Home</Link>
            <Link to="/products" className="link">Products</Link>
        </div>
    )
}

export default Header;
