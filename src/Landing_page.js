import React from "react";
import "./Landing_page.css";
import { Link } from "react-router-dom";

function Landing_page() {
  return (
    <>
      <div className="container-1">
        <img
          src="/images/main-image.jpeg"
          alt="can't load imagr"
          className="img-1"
        />

        <div className="right">
          <h1>10x Team 04</h1>
          <Link to={"/postview"}>
            <button class="btn" type="submit">
              Enter
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Landing_page;
