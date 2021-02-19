import React from "react";

export default function Issue(props) {
  const { username, subject, description, votes, _id } = props;
  return (
    <div className="color_bg">
      <table>
        <thead>
          <th>{username}</th>
          <th>{subject}</th>
          <th>{description}</th>
          <th>{votes}</th>
        </thead>
      </table>
    </div>
  );
}
