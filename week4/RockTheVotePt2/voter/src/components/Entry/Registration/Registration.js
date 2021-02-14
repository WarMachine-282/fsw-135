import React from "react"
import { Link } from "react-router-dom";
import "./Registration.css"

const Registration = () => {
    return (
      <div>
      <div className="container">
        <div className="left">
          <div className="header">
            <h2 className="animation a1">Sign up here!</h2>
            <h4 className="animation a2">
              Choose your username and password
            </h4>
          </div>
          <form action="">
            <div className="form">
              <input
                type="username"
                className="form-field animation a3"
                placeholder="Username"
              />
              <input
                type="password"
                className="form-field animation a4"
                placeholder="Password"
              />
              <Link to="Main">
                <button id="lgn-btn" className="animation a5">
                  SUBMIT!
                </button>
              </Link>
              <Link to="/">
                <button id="sgn-btn" className="animation a5">
                  GO BACK
                </button>
              </Link>
              <br/>
            </div>
          </form>
        </div>
        <div className="sgn-right"></div>
      </div>
    </div>
    )
}

export default Registration