import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <a to="/" className="btn btn-ghost normal-case text-xl">
        Auth Master
      </a>
      <Link className="btn btn-ghost normal-case text-xl" to="/">
        Home
      </Link>
      <Link className="btn btn-ghost normal-case text-xl" to="/login">
        Login
      </Link>

      <Link className="btn btn-ghost normal-case text-xl" to="/register">
        Register
      </Link>
    </div>
  );
};

export default Header;
