import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="navbarhome">
        <Link to="/about">About</Link>
      </div>
      <div>
        <p>Life is rough so lets GetItDone</p>

        <Link to="/signup">
          <p>Sign Up!</p>
        </Link>

        <p>Already have an account?</p>
        <Link to="/login">
          <p>Log In! </p>
        </Link>
      </div>
    </>
  );
};

export default Landing;
