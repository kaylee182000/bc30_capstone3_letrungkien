import React from "react";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div className="container">
      <div className="card d-flex justify-content-center shadow p-5 mb-5 mt-5 bg-body rounded">
        <form>
          <div className="mb-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            {/* <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div> */}
          </div>
          <div className="mb-4">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-4 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Keep me signed in
            </label>
          </div>
          <button type="submit" className="btn btn-dark">
            Login
          </button>
        </form>
        <p className="mt-4">
          Not a Member?
          <NavLink className="text-black" to="/register"> Join us</NavLink>
        </p>
      </div>
    </div>
  );
}
