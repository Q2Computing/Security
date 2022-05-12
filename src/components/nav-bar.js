import React from "react";
import AuthenticationButton from "./authentication-button";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav-container mb-3">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container">
                    <div className="navbar-nav">
                        <NavLink
                            to="/home"
                            exact
                            className="nav-link"
                            activeClassName="router-link-exact-active"
                        >
                            Home
                        </NavLink>
                    </div>
                    <div className="navbar-brand logo">
                        <NavLink
                            to="/camera"
                            exact
                            className="nav-link"
                            activeClassName="router-link-exact-active"
                        >
                            Camera
                        </NavLink>
                    </div>
                    <div className="nabar-nav ml-auto">
                        <AuthenticationButton />
                    </div>
                </div>
            </nav>
    </div>
  );
};

export default NavBar;
