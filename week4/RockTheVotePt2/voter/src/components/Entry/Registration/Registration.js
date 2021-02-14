import React from "react"
import { Link } from "react-router-dom";
import "./Registration.css"

const Registration = () => {
    return (
        <div>
    <div>
      <form>
        <div className="segment">
          <h1>Sign up page</h1>
        </div>
        <label>
          <input type="text" placeholder="Username" />
        </label>
        <label>
          <input type="password" placeholder="Password" />
        </label>
        <br/>
        <button className="signup" type="button">
            Submit
        </button>
        <br/>
        <button className="signup" type="button">
        <Link to="/" style={{color: "inherit", textDecoration: "none" }}>Back</Link>
        </button>
      </form>
    </div>
        </div>
    )
}

export default Registration