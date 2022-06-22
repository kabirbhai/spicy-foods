import { Avatar, Badge } from "@mui/material";
import profile from "../../../images/me.jpg";
import logo from "../../../images/logo.png";

import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              <img height={40} src={logo} alt="Logo" />
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>

            <Avatar
              alt="Remy Sharp"
              src={profile}
              sx={{ width: 56, height: 56 }}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
