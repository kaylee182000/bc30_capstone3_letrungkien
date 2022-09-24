import React from "react";
import { NavLink } from "react-router-dom";
import image1 from "../../assets/img/image 8.png";
import logo from "../../assets/img/j1.png";
import { useSelector } from "react-redux";

export default function NavBar() {
  const { userLogin } = useSelector((state) => state.userReducer);

  console.log(userLogin);
  const renderLoginNavItem = () => {
    if (userLogin == null) {
      return (
        <>
          <li className="nav-item me-2">
            <NavLink className="nav-link text-white mt-1" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item me-2">
            <NavLink className="nav-link text-white mt-1" to="/register">
              Register
            </NavLink>
          </li>
          <li className="nav-item me-2">
            <NavLink className="nav-link text-white mt-1" to="/profile">
              Profile
            </NavLink>
          </li>
        </>
      );
    }
    return (
      <li className="nav-item me-2">
        <NavLink className="nav-link text-white fs-5" to="/profile">
          <i class="fa-regular fa-circle-user"></i>
        </NavLink>
      </li>
    );
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand fw-bold text-white fs-3" to="/">
          {/* <img src={logo} alt="" style={{ width: "5%" }} className="me-2" /> */}
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
          <div className="mt-2">
            <ul className="navbar-nav me-auto mt-lg-0">
              {renderLoginNavItem()}
              <li className="nav-item">
                <NavLink className="nav-link text-white fs-5" to="/cart">
                  <i class="fa-solid fa-bag-shopping"></i>
                  {/* <i class="fa-regular fa-circle-user"></i> */}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white fs-5" to="/search">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
