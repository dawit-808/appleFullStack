import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light fixed-top p-1 text-white">
        <div className="container-fluid">
          <a className="navbar-brand d-md-none text-white" href="#">
            <i className="fa-brands fa-apple"></i>
          </a>

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
                <a className="nav-link text-white" href="#">
                  <i className="fa-brands fa-apple"></i>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Store
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Mac
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  iPad
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  iPhone
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Watch
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Vision
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  AirPods
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  TV & Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Accessories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Support
                </a>
              </li>

              <li className="nav-item d-none d-md-block">
                <a className="nav-link" href="#">
                  <i className="fa-solid fa-magnifying-glass white-icon"></i>
                </a>
              </li>
              <li className="nav-item d-none d-md-block">
                <a className="nav-link" href="#">
                  <i className="fa-regular fa-bookmark white-icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
