import React from "react";
import { NavLink } from "react-router-dom";
import image1 from "../../assets/img/image 8.png";
import logo from "../../assets/img/j1.png";
//import { useSelector } from "react-redux";

export default function NavBar() {

  return (
    <nav className="navbar navbar-expand-sm navbar-black bg-black">
      <div className="container">
        <NavLink className="navbar-brand fw-bold text-white fs-3" to="/">
          <img src={logo} alt="" style={{ width: "5%" }} className="me-2" />
          KickGeek
        </NavLink>
        <button
          className="navbar-toggler d-lg-none text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavId">
          {/* <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink className="nav-link text-white" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/login">
                Login
              </NavLink>
            </li>
          </ul> */}
          <div className="d-flex me-3">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <NavLink className="nav-link text-white" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/register">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/profile">
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/cart">
                  <img src={image1} alt="" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/search">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}
