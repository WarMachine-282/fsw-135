import React from "react";
import { UserContext } from "../../context/UserProvider.js";

export default function Issue(props) {
  const { subject, description, votes, _id } = props;
  return (
    <UserContext.Consumer>
    {(context) => (
    <main>
      <section className="panel important">
        <table className="table-content">
          <thead>
            <th>Subject</th>
            <th>Description</th>
            <th>Your vote</th>
          </thead>
          <tbody>
            <tr>
              <td>{subject}</td>
              <td>{description}</td>
              <td>{votes}</td>
            </tr>
            <button onClick={() => {context.deleteIssue(_id)}}>Delete</button>
          </tbody>
        </table>
      </section>
    </main>
      )}
      </UserContext.Consumer>
  );
}
