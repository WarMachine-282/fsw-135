import React, { useState, useContext } from "react";
import Registration from "./registration/Registration";
import Login from "./login/Login";
import { UserContext } from "../../context/UserProvider";



const initInputs = { username: "", password: "" };

export default function Auth() {
  const [inputs, setInputs] = useState(initInputs);
  const [toggle, setToggle] = useState(false);
  const { signup, login, errMsg, resetAuthErr } = useContext(UserContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleSignup(e) {
    e.preventDefault();
    signup(inputs);
  }

  function handleLogin(e) {
    e.preventDefault();
    login(inputs);
  }
  function toggleForm() {
    resetAuthErr()
    setToggle(prev => !prev)
  }

  return (
    <div className="auth-container">
      {toggle ? (
        <Registration
          handleChange={handleChange}
          handleSubmit={handleSignup}
          setToggle={toggleForm}
          inputs={inputs}
          errMsg={errMsg}
        />
      ) : (
        <Login
          handleChange={handleChange}
          handleSubmit={handleLogin}
          setToggle={toggleForm}
          inputs={inputs}
          errMsg={errMsg}
        />
        )}
    </div>
  );
}
