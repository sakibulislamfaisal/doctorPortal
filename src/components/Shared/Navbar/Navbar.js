import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light text-white">
        <NavLink
          to="/"
          className="navbar-brand"
          style={{ color: "green", fontWeight: "bold", fontSize: "20px" }}
        >
          {" "}
          Doctors Portal{" "}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav  ml-auto">
            <li className="nav-item active text-uppercase">
              <NavLink
                className="nav-link mr-5"
                to="/"
                style={{ color: "green", fontWeight: "bold", fontSize: "20px" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item text-uppercase">
              <NavLink
                style={{ color: "green", fontWeight: "bold", fontSize: "20px" }}
                className="nav-link mr-5"
                to="/appointment"
              >
                Appointment
              </NavLink>
            </li>
            <li className="nav-item text-uppercase">
              <NavLink
                style={{ color: "green", fontWeight: "bold", fontSize: "20px" }}
                className="nav-link mr-5"
                to="/dashboard/appointment"
              >
                Admin Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
