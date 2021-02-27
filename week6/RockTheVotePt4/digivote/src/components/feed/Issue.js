import React from "react";
import { UserContext } from "../../context/UserProvider.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
            {() => {
              console.log(context)
              return ""
            }}
            <div className="del_btn_bg">
            <FontAwesomeIcon className="del_issue" onClick={() => {context.deleteIssue(_id)}} icon={faTrash}/>
            </div>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
      )}
      </UserContext.Consumer>
  );
}
