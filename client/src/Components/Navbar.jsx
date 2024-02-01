import React from 'react';
import './Styles/Navbar.css';
import { NavLink } from 'react-router-dom';
import { Login, Register } from './Authentication';

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg custom-navbar">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">DabbaWala</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink to={"/"} className="nav-link">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to={"/Orders"} className="nav-link">Orders</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to={"/Dabbawalas"} className="nav-link">Dabbawalas</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to={"/DeliveryTracking"} className="nav-link">DeliveryTracking</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to={"/DabbawalaCommunity"} className="nav-link">DabbawalaCommunity</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button
                                className="login-button"
                                data-bs-toggle="modal"
                                data-bs-target="#loginrModal"
                            >
                                <i className="fa-solid fa-unlock-keyhole"></i>&nbsp;Login
                            </button>
                            <div className="vertical-line"></div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to={"/DLogin"} className="nav-link">EmployeeLogin</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <Login />
            <Register />
        </>
    );
};

export default Navbar;
