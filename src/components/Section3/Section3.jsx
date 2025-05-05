import React from "react";
import "./Section3.css";
import watchLogo from "../../assets/icon/watch-logo.png";

function Section3() {
  return (
    <>
      <section className="section3 p-5">
        <div className="descriptions container text-center text-dark mt-5 mt-md-0">
          <div className="watch-logo">
            <img className="img-fluid" src={watchLogo} alt="" />
          </div>
          <h6>Live healthier. Train better. Stay connected</h6>
          <div className="links">
            <button className="btn btn-primary rounded-pill px-3" type="button">
              Learn more
            </button>
            <button
              type="button"
              className="btn btn-outline-primary rounded-pill px-3"
            >
              Shop Watch
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section3;
