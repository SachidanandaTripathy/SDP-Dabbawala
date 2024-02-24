import React from 'react';
import './Styles/Navbar.css';
import { NavLink } from 'react-router-dom';
import { Login, Register } from './Authentication';
import { useAuth } from '../AuthProvider';
import { toast } from 'react-toastify';
import logo from './Styles/favicon.jpg';

function Navbar() {
    const Auth = useAuth();
    const user = Auth.user;
    const handleLogout = () => {
        Auth.logout();
        toast.success("Successfully logout", { position: 'bottom-right' })
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg custom-navbar">
                <div className="container-fluid">
                    <a className="navbar-brand"><img src={logo} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {(!user || (user && user.role == "customer")) && (<>
                                <li className="nav-item nav-button ">
                                    <NavLink to={"/"} className="nav-link"><i class="fa-solid fa-house"></i>&nbsp; Home</NavLink>
                                </li>
                                <li className="nav-item nav-button ">
                                    <NavLink to={"/Orders"} className="nav-link"><i class="fa-solid fa-pizza-slice"></i>&nbsp;Orders</NavLink>
                                </li>
                                <li className="nav-item nav-button ">
                                    <NavLink to={"/Dabbawalas"} className="nav-link"><i class="fa-solid fa-bicycle"></i>&nbsp;Dabbawalas</NavLink>
                                </li>
                                <li className="nav-item nav-button ">
                                    <NavLink to={"/DeliveryTracking"} className="nav-link"><i class="fa-solid fa-truck"></i>Tracking</NavLink>
                                </li>
                                <li className="nav-item nav-button ">
                                    <NavLink to={"/DabbawalaCommunity"} className="nav-link"><i class="fa-solid fa-comments"></i>&nbsp;Community</NavLink>
                                </li>
                            </>
                            )}
                            {user && user.role == "Dabbawala" && (
                                <>
                                    <li className="nav-item nav-button ">
                                        <NavLink to={"/Dashboard"} className="nav-link"><i class="fa-solid fa-gauge"></i>&nbsp;DashBoard</NavLink>
                                    </li>
                                    <li className="nav-item nav-button ">
                                        <NavLink to={"/Dprofile"} className="nav-link"><i class="fa-solid fa-user"></i>&nbsp;Profile</NavLink>
                                    </li>
                                    <li className="nav-item nav-button ">
                                        <NavLink to={"/DHistory"} className="nav-link"><i class="fa-solid fa-clock-rotate-left"></i>&nbsp;Check-in History</NavLink>
                                    </li>
                                </>
                            )}
                            {user && user.role == "admin" && (
                                <>
                                    <li className="nav-item nav-button">
                                        <NavLink to={"/admin"} className="nav-link"><i class="fa-solid fa-gauge"></i>&nbsp;Admin Dashboard</NavLink>
                                    </li>
                                    <li className="nav-item nav-button">
                                        <NavLink to={"/requests"} className="nav-link">Requests</NavLink>
                                    </li>
                                </>
                            )}

                        </ul>
                                
                        <div className="d-flex">
                            {!user &&
                                <button
                                    className="login-button loginbtn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#loginrModal"
                                >
                                    <i className="fa-solid fa-unlock-keyhole"></i>&nbsp;Login
                                </button>
                            }
                            {user &&
                                <button
                                    className="login-button loginbtn"
                                    onClick={handleLogout}
                                >
                                    <i className="fa-solid fa-unlock-keyhole"></i>&nbsp;Logout
                                </button>
                            }{!user &&
                                <>
                                    <div className="vertical-line"></div>
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <button to={"/DLogin"} className="login-button loginbtn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#registerModal"><i class="fa-solid fa-user-plus"></i>&nbsp;Register</button>
                                        </li>

                                    </ul>
                                </>
                            }

                        </div>
                    </div>
                </div>
            </nav>
            <Login />
            <Register />
            <hr />
        </>
    );
};

export default Navbar;
