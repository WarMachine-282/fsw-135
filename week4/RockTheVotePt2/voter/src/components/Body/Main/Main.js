import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <div className="color_bg">
      <header role="banner">
        <h1>DigiVote</h1>
        <Link to="/">
          <ul className="utilities">
            <li className="logout warn">
              <a href="">Log Out</a>
            </li>
          </ul>
        </Link>
      </header>
      <main role="main">
        <section className="panel">
          <h2>Your published issues</h2>
          <ul>
            <li>
              <b>18 </b>Published Issue
            </li>
            <li>
              <b>2456</b> Drafts.
            </li>
            <li>
              Most popular issue: <b>Raise minimum wage? YES/NO? </b>
            </li>
          </ul>
        </section>
        <section className="panel">
          <h2>Rules</h2>
          <ul>
            <li>Treat others how you would like to be treated.</li>
            <li>Provide an objective honest description.</li>
            <li>Most importantly question everything.</li>
          </ul>
        </section>
        <section className="panel important">
          <h2>Post an issue</h2>
          <form action="#">
            <div className="twothirds">
              <label for="name">Topic:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="List your topic here."
              />
              <label for="textarea">Description:</label>
              <textarea
                cols="40"
                rows="8"
                name="textarea"
                id="textarea"
                placeholder="Give a detailed description."
              ></textarea>
            </div>
            <div className="onethird">
              <legend>Your view</legend>
              <label for="radio-choice-1">
                <input
                  type="radio"
                  name="radio-choice"
                  id="radio-choice-1"
                  value="choice-1"
                />{" "}
                YES
              </label>
              <label for="radio-choice-2">
                <input
                  type="radio"
                  name="radio-choice"
                  id="radio-choice-2"
                  value="choice-2"
                />{" "}
                NO
              </label>
              <div>
                <input type="submit" value="Submit" />
              </div>
            </div>
          </form>
        </section>
        <section className="panel important">
          <h2>Users</h2>
          <table>
            <tr>
              <th>Username</th>
              <th>Issues</th>
              <th>comments</th>
              <th>date</th>
            </tr>
            <tr>
              <td>Pete</td>
              <td>4</td>
              <td>7</td>
              <td>Oct 10, 2015</td>
            </tr>
            <tr>
              <td>Mary</td>
              <td>5769</td>
              <td>2517</td>
              <td>Jan 1, 2014</td>
            </tr>
          </table>
        </section>
      </main>
      <footer role="contentinfo">&copy;2020 Christian Van Loon</footer>
    </div>
  );
};

export default Main;
