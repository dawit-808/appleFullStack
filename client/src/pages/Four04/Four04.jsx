import React from "react";
import { Link } from "react-router-dom";

function Four04() {
  return (
    <div style={{ textAlign: "center", padding: "4rem" }}>
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">Go back Home</Link>
    </div>
  );
}

export default Four04;
