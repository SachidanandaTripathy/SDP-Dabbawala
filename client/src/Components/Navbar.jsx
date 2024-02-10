import React from 'react';
import './Styles/Navbar.css';
import { NavLink } from 'react-router-dom';
import { Login, Register } from './Authentication';
import { useAuth } from '../AuthProvider';
import { toast } from 'react-toastify';

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
                    <a className="navbar-brand">DabbaWala</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* {user && user.role == "customer" && (<> */}
                                <li className="nav-item">
                                    <NavLink to={"/"} className="nav-link">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/Orders"} className="nav-link">Orders</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/Dabbawalas"} className="nav-link">Dabbawalas</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/DeliveryTracking"} className="nav-link">DeliveryTracking</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/DabbawalaCommunity"} className="nav-link">DabbawalaCommunity</NavLink>
                                </li>
                            {/* </>
                            )} */}
                            {user && user.role == "Dabbawala" && (
                                <li className="nav-item">
                                    <NavLink to={"/DPage"} className="nav-link">Dabbawala page</NavLink>
                                </li>

                            )}
                            {user && user.role == "admin" && (
                                <li className="nav-item">
                                    <NavLink to={"/admin"} className="nav-link">Admin</NavLink>
                                </li>
                            )}

                        </ul>

                        <div className="d-flex">
                            {!user &&
                                <button
                                    className="login-button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#loginrModal"
                                >
                                    <i className="fa-solid fa-unlock-keyhole"></i>&nbsp;Login
                                </button>
                            }
                            {user &&
                                <button
                                    className="login-button"
                                    onClick={handleLogout}
                                >
                                    <i className="fa-solid fa-unlock-keyhole"></i>&nbsp;Logout
                                </button>
                            }
                            <div className="vertical-line"></div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to={"/DLogin"} className=" nav-link login-button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#registerModal">EmployeeLogin</NavLink>
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
