import React, { useState } from "react";
import axios from "axios";

export const UserContext = React.createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default function UserProvider(props) {
  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    issues: [],
  };

  const [userState, setUserState] = useState(initState);

  function handleAuthErr(errMsg) {
    setUserState(prevState => ({
      ...prevState,
      errMsg
    }))
  }

  function resetAuthErr() {
    setUserState(prevState => ({
      ...prevState,
      errMsg: ""
    }))
  }

  const signup = (credentials) => {
    axios
      .post("/auth/signup", credentials)
      .then((res) => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
      })
      .catch((err) => handleAuthErr(err.response.data.errMsg));
  };

  const login = (credentials) => {
    axios
      .post("/auth/login", credentials)
      .then((res) => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        getUserIssue();
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
        console.log(login);
      })
      .catch((err) => handleAuthErr(err.response.data.errMsg));
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserState({
      user: {},
      token: "",
      issues: [],
      // comments: []
    });
    console.log(logout);
  };

  const getUserIssue = () => {
    userAxios
      .get("/api/issue/")
      .then((res) => {
        setUserState((prevState) => ({
          ...prevState,
          issues: res.data,
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  };

  const addIssue = (newIssue) => {
    userAxios
      .post("/api/issue", newIssue)
      .then((res) => {
        setUserState((prevState) => ({
          ...prevState,
          issues: [...prevState.issues, res.data],
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  };
  const deleteIssue = (id) => {
    console.log(id)
         userAxios.delete(`/api/issue/${id}`)
         .then(res => {
          setUserState((prevState) => ({
            ...prevState,
            issues: prevState.issues.filter(issue => issue._id !== id) 
          }));
         })
         .catch (err => {
             console.log(err, "blue")
         })
}

  return (
    <UserContext.Provider
      value={{ ...userState, signup, login, logout, deleteIssue, addIssue, resetAuthErr }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
