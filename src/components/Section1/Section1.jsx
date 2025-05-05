import React from "react";
import "./Section1.css";

function Section1() {
  return (
    <>
      <section className="section1 d-flex flex-column justify-content-end justify-content-md-start">
        <div className="descriptions container text-center text-white">
          <h1>iPhone 16 Pro</h1>
          <h6>Hello, Apple Intelligence.</h6>
          <div className="links mt-3">
            <button className="btn btn-primary rounded-pill px-3" type="button">
              Learn more
            </button>
            <button
              type="button"
              className="btn btn-outline-primary rounded-pill px-3"
            >
              Buy
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section1;
