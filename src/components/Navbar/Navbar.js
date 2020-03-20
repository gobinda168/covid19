import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <Link class="navbar-brand" to="/">
          <img
            src="/docs/4.4/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
          COVID19 TRACKER
        </Link>

        <Link to="/" className="navItem">Home</Link>
        <Link to="/india" className="navItem">India</Link>
        <Link to="/country" className="navItem">Country</Link>
      </nav>
    </div>
  );
};
