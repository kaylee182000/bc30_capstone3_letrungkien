import React from "react";

export default function Footer() {
  return (
    <div className="footer bg-dark text-light pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-6">
            <h4>Get Help</h4>
            <div>
              <ul>
                <li>Home</li>
                <li>Nike</li>
                <li>Adidas</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-6">
            <h4>Support</h4>
            <div>
              <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Help</li>
                <li>Phone</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-6">
            <h4>Register</h4>
            <div>
              <ul>
                <li>Register</li>
                <li>Login</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-white mt-4" style={{ fontSize: "10px" }}>
        Copyright © 2022 CyberSoft ALl Rights Reserved
      </p>
    </div>
  );
}
