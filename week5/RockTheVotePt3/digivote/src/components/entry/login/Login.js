import React, { useRef } from "react";
import ReactPasswordToggleIcon from "react-password-toggle-icon";
import "./Login.css";

const Login = (props) => {
  let inputRef = useRef();
  const showIcon = () => <i class="fa fa-eye" aria-hidden="true"></i>;
  const hideIcon = () => <i class="fa fa-eye-slash" aria-hidden="true"></i>;
  return (
    <div>
      <div className="container">
        <div className="left">
          <div className="header">
            <h2 className="animation a1">Welcome To DigiVote!</h2>
            <h4 className="animation a2">
              Log in to your account using username and password
            </h4>
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
              <button type="submit" id="lgn-btn" className="animation a5">
                LOGIN
              </button>
              <button
                onClick={() => props.setToggle(true)}
                id="sgn-btn"
                className="animation a5"
              >
                SIGN UP
              </button>
            </div>
          </form>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Login;
