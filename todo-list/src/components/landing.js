import React from "react";
import { Link } from "react-router-dom";
import Login from "./login";

const Landing = () => {
  return (
    <>
      <header className="navbarhome">
        <Link to="/about">About</Link>
      </header>
      <div className="homebox">
        <div className="mottobox">
          <p className="thatsthemotto">Task Notes</p>
          <p className="thatsthemotto2">Empower your productivity</p>
        </div>

        <div className="loginlanding">
          <Login />
          <Link to="/signup">
            <p>Sign Up!</p>
          </Link>

          {/* <p class="accountexists">Already have an account?</p>
          <Link to="/login">
            <p>Log In! </p>
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Landing;
