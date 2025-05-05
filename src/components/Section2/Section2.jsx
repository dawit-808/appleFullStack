import React from "react";
import "./Section2.css";

function Section2() {
  return (
    <>
      <section className="section2 p-5">
        <div className="descriptions container text-center text-white">
          <h1>iPhone 16</h1>
          <h6>Hello, Apple Intelligence.</h6>
          <div className="links mt-3">
            <button className="btn btn-light rounded-pill px-3" type="button">
              Learn more
            </button>
            <button
              type="button"
              className="btn btn-outline-light rounded-pill px-3"
            >
              Buy
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section2;
