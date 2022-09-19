import React from "react";
import { NavLink } from "react-router-dom";
export default function Login() {
  return (
    <div className="container" style={{height: "65vh"}}>
      <div className="form-signin w-100 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-semibold text-center">Please Sign In</h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" defaultValue="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-dark" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted text-center">Not a Member? 
          <NavLink to="/register" className="text-black"> Join Us</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}
