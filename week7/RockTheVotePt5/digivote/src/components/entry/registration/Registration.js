import React, { useRef } from "react";
import ReactPasswordToggleIcon from "react-password-toggle-icon";
import "./Registration.css";

const Registration = (props) => {
  let inputRef = useRef();
  const showIcon = () => <i class="fa fa-eye" aria-hidden="true"></i>;
  const hideIcon = () => <i class="fa fa-eye-slash" aria-hidden="true"></i>;
  return (
    <div>
      <div className="container">
        <div className="left">
          <div className="header">
            <h2 className="animation a1">Sign up here!</h2>
            <h4 className="animation a2">Choose your username and password</h4>
          </div>
          <form onSubmit={props.handleSubmit}>
            <div className="form">
              <input
                className="form-field animation a3"
                type="text"
                value={props.username}
                name="username"
                onChange={props.handleChange}
                placeholder="Username"
              />
              <div className="pass-wrapper">
                <input
                  className="form-field animation a4"
                  type={"password"}
                  value={props.password}
                  name="password"
                  onChange={props.handleChange}
                  placeholder="Password"
                  ref={inputRef}
                />
                <ReactPasswordToggleIcon
                  inputRef={inputRef}
                  showIcon={showIcon}
                  hideIcon={hideIcon}
                />
              </div>
              <p style={{backgroundColor:"#c00000", color: "#ffffff", textAlign: "center"}}>{props.errMsg}</p>
              <button type="submit" id="lgn-btn" className="animation a5">
                SUBMIT!
              </button>
              <button
                onClick={() => props.setToggle(false)}
                id="sgn-btn"
                className="animation a5"
              >
                GO BACK
              </button>
              <br />
            </div>
          </form>
        </div>
        <div className="sgn-right"></div>
      </div>
    </div>
  );
};

export default Registration;
