import React from "react";

export default function Register() {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center fw-semibold m-5">Register</h2>
      <form className="row g-3">
        <div className="col-md-6 form-floating mb-4">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="col-md-6 form-floating mb-4">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="col-md-6 form-floating mb-4">
          <input
            type="password"
            className="form-control"
            id="floatingConfirmPassword"
            placeholder="Confirm Password"
          />
          <label htmlFor="floatingConfirmPassword">Confirm Password</label>
        </div>
        <div className="col-md-6 form-floating mb-4">
          <input className="form-control" id="name" placeholder="Name" />
          <label htmlFor="name">Name</label>
        </div>
        <div className="col-md-6 form-floating mb-4">
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="phone"
          />
          <label htmlFor="phone">Phone</label>
        </div>
        <div className="col-md-6 form-floating mb-4">
          <fieldset className="row">
            <legend className="col-form-label col-sm-2 pt-0 ps-3">Gender</legend>
            <div className="col-sm-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender1"
                  defaultValue="option1"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="gender1">
                  Male
                </label>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender2"
                  defaultValue="option1"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="gender2">
                  Female
                </label>
              </div>
            </div>
          </fieldset>
        </div>

        <div className="d-grid mt-4 mb-4">
          <button type="submit  " className="btn btn-dark ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

<fieldset className="row mb-3">
  <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
  <div className="col-sm-10">
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="gridRadios"
        id="gridRadios1"
        defaultValue="option1"
        defaultChecked
      />
      <label className="form-check-label" htmlFor="gridRadios1">
        First radio
      </label>
    </div>
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="gridRadios"
        id="gridRadios2"
        defaultValue="option2"
      />
      <label className="form-check-label" htmlFor="gridRadios2">
        Second radio
      </label>
    </div>
    <div className="form-check disabled">
      <input
        className="form-check-input"
        type="radio"
        name="gridRadios"
        id="gridRadios3"
        defaultValue="option3"
        disabled
      />
      <label className="form-check-label" htmlFor="gridRadios3">
        Third disabled radio
      </label>
    </div>
  </div>
</fieldset>;
