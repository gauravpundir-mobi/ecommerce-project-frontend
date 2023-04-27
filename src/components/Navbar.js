import React, { useContext } from "react";
import './Navbar.css';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../App";

function Navbar() {

    const [quantity, setQuantity] = useContext(Context);

    const navigate = useNavigate();
    
    function LoginNav(){
        navigate("/login");
    }

    function CartNav(){
        navigate("/cart");
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <i><Link to="/" className="navbar-brand">Online Store</Link></i>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i>Categories</i>
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/men">Men</Link></li>
                                    <li><Link className="dropdown-item" to="/women">Women</Link></li>
                                    <li><Link className="dropdown-item" to="kids">Kids</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <button style={{marginLeft:5}} className="btn btn-outline-success" type="button" onClick={LoginNav}>Login</button>
                        <FontAwesomeIcon icon={faCartShopping} size="2xl" className="cart" onClick={CartNav}/><span style={{color:"white", fontWeight:"bold"}}>{quantity}</span>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;