import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearClick = (event) => {
    setText(event.target.value);
    props.showAlert("Cleared Text", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success")
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ] +/);
    setText(newText.join(" "))
    props.showAlert("Extra space removed", "success")
  }

  const [text, setText] = useState("");

  const wordCount = text.split(/\s+/).filter((element) => {
    return element.length !== 0;
  }).length;
  
  const minCount = 0.008 * text.split(" ").filter((word) => word !== "").length;

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#212529" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="floatingTextarea2"
            onChange={handleOnChange}
            rows={8}
            style={{
              backgroundColor: props.mode === "dark" ? "#212529" : "white",
              color: props.mode === "dark" ? "white" : "#212529",
            }}
          ></textarea>
        </div>

        <button
          type="button"
          disabled={text.length === 0 || !isNaN(text)}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>

        <button
          type="button"
          disabled={text.length === 0 || !isNaN(text)}
          className="btn btn-success mx-1 my-1"
          onClick={handleLowClick}
        >
          Convert to lowercase
        </button>

        <button
          type="button"
          disabled={text.length === 0}
          className="btn btn-warning mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>

        <button
          type="button"
          disabled={text.length === 0}
          className="btn btn-info mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>

        <button className="btn btn-primary mx-1" disabled={text.length === 0} onClick={handleExtraSpaces}> Remove Extra Space </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {" "}
          {wordCount} words and {text.length} characters
        </p>
        <p>{minCount} minutes </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
