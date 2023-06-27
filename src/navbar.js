import React from 'react';
import {useNavigate} from "react-router-dom";

function Navbar(props) {

    const navigate = useNavigate();

    return (
        <div>
            <nav className="d-flex justify-content-around">
                <div onClick={()=>{navigate("/")}} className="navbar-brand">
                    <img src="logo.svg" alt="logo"/>
                </div>
                <ul className="navbar">
                    <li onClick={()=>{navigate("/")}} className="nav-link">Home</li>
                    <li onClick={()=>{navigate("/shop")}} className="nav-link">Shop</li>
                    <li className="nav-link">Plant Care</li>
                    <li className="nav-link">Blogs</li>
                </ul>
                <div>
                    <button className="btn"><img src="search.svg" alt="search"/></button>
                    <button className="btn"><img src="basket.svg" alt="basket"/></button>
                    <button className="btn btn-success"><img src="Logout.svg" alt="out"/> Login</button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;