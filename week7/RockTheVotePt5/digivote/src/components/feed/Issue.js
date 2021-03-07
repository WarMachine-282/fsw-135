import React from "react";
import { UserContext } from "../../context/UserProvider.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Issue.css";

export default function Issue(props) {
  const { subject, description, votes, _id } = props;
  return (
    <UserContext.Consumer>
      {(context) => (
        <main>
          <section className="panel important" id="issue_card">
            <header className="card_hd">
              <p>{subject}</p>
            </header>
            <p>{description}</p>
            <p>{votes}</p>
            {() => {
              console.log(context);
              return "";
            }}
            <div className="del_btn_bg">
              <FontAwesomeIcon
                className="del_issue"
                onClick={() => {
                  context.deleteIssue(_id);
                }}
                icon={faTrash}
              />
            </div>
          </section>
        </main>
      )}
    </UserContext.Consumer>
  );
}
