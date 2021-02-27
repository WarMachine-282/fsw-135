import React, { useContext } from "react";
import { UserContext } from "../../context/UserProvider.js";
import Header from "../body/header/Header";
import Footer from "../body/footer/Footer";
import Published from "./Published";
import Rules from "./Rules";
import IssueForm from "./IssueForm";
import "./Main.css";

const Main = () => {
  return (
    <UserContext.Consumer>
      {(context) => (
        <div className="color_bg">
          <Header />
          <main role="main">
            <Published />
            <Rules />
            <IssueForm addIssue={context.addIssue} />
            <section className="panel important">
              <h2>Users</h2>
              <table className="table-content">
                <thead>
                  {/* <th>date</th> */}
                  <th>Username</th>
                  <th>Topics</th>
                  <th>comments</th>
                  <th>votes</th>
                </thead>
                <tbody>
                  <tr>
                    {/* <td>Oct 10, 2020</td> */}
                    <td>Pete</td>
                    <td>44</td>
                    <td>776</td>
                    <td>124,797</td>
                  </tr>
                  <tr>
                    {/* <td>Jan 1, 2020</td> */}
                    <td>Mary</td>
                    <td>469</td>
                    <td>2517</td>
                    <td>234,574</td>
                  </tr>
                  <tr>
                    {/* <td>Oct 10, 2020</td> */}
                    <td>Jake</td>
                    <td>87</td>
                    <td>221</td>
                    <td>223,432</td>
                  </tr>
                  <tr>
                    {/* <td>Dec 23, 2020</td> */}
                    <td>Rose</td>
                    <td>724</td>
                    <td>563</td>
                    <td>435,645</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </main>
          <Footer />
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default Main;
