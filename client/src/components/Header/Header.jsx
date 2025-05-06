import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light fixed-top p-1 text-white">
        <div className="container-fluid">
          <Link className="navbar-brand d-md-none text-white" to="/">
            <i className="fa-brands fa-apple"></i>
          </Link>

          <div className="d-md-none d-flex align-items-center ms-auto gap-5">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-regular fa-bookmark"></i>
            <div id="menu" className="menu">
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>

          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav gap-3">
              <li className="nav-item apple-logo d-none d-md-flex">
                <Link className="nav-link text-white" to="/">
                  <i className="fa-brands fa-apple"></i>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to="store">
                  Store
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="mac">
                  Mac
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="ipad">
                  iPad
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="iphone">
                  iPhone
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="watch">
                  Watch
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="vision">
                  Vision
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="airpods">
                  AirPods
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="tv">
                  TV & Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="accessories">
                  Accessories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="support">
                  Support
                </Link>
              </li>

              <li className="nav-item d-none d-md-block">
                <Link className="nav-link" to="#">
                  <i className="fa-solid fa-magnifying-glass white-icon"></i>
                </Link>
              </li>
              <li className="nav-item d-none d-md-block">
                <Link className="nav-link" to="#">
                  <i className="fa-regular fa-bookmark white-icon"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
