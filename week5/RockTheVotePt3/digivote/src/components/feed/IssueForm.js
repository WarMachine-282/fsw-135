import React, { useState } from "react";

const initInputs = {
  subject: "",
  description: "",
  votes: "",
};

export default function IssueForm(props) {
  const [inputs, setInputs] = useState(initInputs);
  const { addIssue } = props;

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addIssue(inputs);
    setInputs(initInputs);
  }

  const { votes, subject, description } = inputs;
  return (
    <section className="panel important">
      <h2>Post an issue</h2>
      <form onSubmit={handleSubmit}>
        <div className="twothirds">
          <label for="name">Topic:</label>
          <input
            type="text"
            name="subject"
            id="name"
            value={subject}
            onChange={handleChange}
            placeholder="List your topic here."
          />
          <label for="textarea">Description:</label>
          <input
          className="text_area"
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
            placeholder="Give a detailed description."
          />
        </div>
        <div className="onethird">
          <legend>Your view</legend>
          <label for="radio-choice-1">
            <input
              type="radio"
              name="radio-choice"
              id="radio-choice-1"
              value={votes}
            />{" "}
            YES
          </label>
          <label for="radio-choice-2">
            <input
              type="radio"
              name="radio-choice"
              id="radio-choice-2"
              value={votes}
            />{" "}
            NO
          </label>
          <div>
            <button className="subbtn">Submit!</button>
          </div>
        </div>
      </form>
    </section>
  );
}
