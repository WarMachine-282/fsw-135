import React from "react";
import { Link } from "react-router-dom";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Icons from "../../Icons/Icons"
import "./Login.css";

const Login = () => {
  return (
    <div className="bg-image">
      <div className="form-body">
      <form>
        <div className="segment">
          <h1>Rock The Vote!</h1>
        </div>
        <label>
          <input type="text" placeholder="Username" />
        </label>
        <label>
          <input type="password" placeholder="Password" />
        </label>
        <button className="login" type="button">
        <div className="login-center"><Icons Icon={LockOutlinedIcon}/>Log in</div>
        </button>
        <br/>
        <button className="signup" type="button">
        <Link to="/Registration" className="signup" type="button"style={{color: "inherit", textDecoration: "none" }}>Sign up</Link>
        </button>
      </form>
      </div>
    </div>
  );
};

export default Login;
