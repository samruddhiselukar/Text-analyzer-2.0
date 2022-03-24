import React, { useState } from "react";

export default function TextInput(props) {
  const [text, setText] = useState("");

  function upperCaseHandler() {
    setText(text.toUpperCase());
  }

  function lowerCaseHandler() {
    setText(text.toLowerCase());
  }

  function clearTextBoxHandler() {
    setText("");
  }

  function spaceRemoveHandler() {
    setText(text.split(/[ ]+/).join(" "));
  }

  function onChangeHandler(event) {
    setText(event.target.value);
  }

  const wordCount = text.split(" ").length - 1;
  return (
    <>
      <div className="container my-5">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Start typing..."
            value={text}
            onChange={onChangeHandler}
            id="textBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-success" onClick={upperCaseHandler}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-2" onClick={lowerCaseHandler}>
          Convert to lowercase
        </button>
        <button className="btn btn-warning" onClick={spaceRemoveHandler}>
          Remove extra spaces
        </button>
        <button className="btn btn-danger mx-2" onClick={clearTextBoxHandler}>
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text analysis</h2>
        <p>
          {wordCount} words and {text.length} characters, reading time{" "}
          {Math.ceil(0.01 * wordCount)} mins
        </p>
        <h4>Preview text</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
